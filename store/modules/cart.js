import Vue from "vue"
const state = {
	cartList: [],
};

const getters = {
	// 检查商品是否存在于购物车中
	checkProductExists(state) {
		return function(skuId) {
			const pos = state.cartList.findIndex(item => item.skuId === skuId)
			return pos === -1 ? false : true;
		}
	},
	// 获取单个商品的购买数量
	getProductSkuNum(state) {
		return function(skuId) {
			const index = state.cartList.findIndex(item => item.skuId === skuId);
			return index !== -1 ? state.cartList[index].skuNum : 0;
		}
	},
}

const mutations = {
	// 添加到购物车
	addShopMutation(state, payload) {
		state.cartList.push(payload);
	},
	// 获取不带活动的购物车列表
	getCartListMutation(state, payload) {
		state.cartList = payload;
	},
	// 修改购物车数量
	changeSkuNumMutation(state, payload) {
		// skuId为商品id
		// value为+1或者-1，操作的递增值
		// currentBuyNum为number-box组件当前商品购物车的操作值
		const {
			skuId,
			value,
			currentBuyNum
		} = payload
		const index = state.cartList.findIndex(item => item.skuId === skuId);
		// 如果当前购买数量小于1则删除该商品
		if (currentBuyNum < 1) {
			state.cartList.splice(index, 1)
		} else {
			state.cartList[index].skuNum += value
		}
	},
	// 删除购物车
	deleteShopMutation(state, payload) {
		// 删除cartList中的数据
		const cartListIndex = state.cartList.findIndex(item => item.skuId === payload);
		state.cartList.splice(cartListIndex, 1)
	},
}
const actions = {
	// 添加到购物车
	async addShopAction({
		commit,
		state
	}, payload) {
		// 给对象添加响应式数据属性
		Vue.set(payload, 'skuNum', 1)
		Vue.set(payload, 'skuId', payload.id)
		Vue.set(payload, 'isChecked', 1)
		await this._vm.$u.api.getAddToCart({
			skuId: payload.id,
			skuNum: payload.skuNum,
		})
		commit('addShopMutation', payload)
	},
	// 获取不带活动的购物车列表
	async getCartListAction({
		commit
	}) {
		let result = await this._vm.$u.api.getCartList()
		commit('getCartListMutation', result)
	},
	// 修改购物车数量
	async changeSkuNumAction({
		commit,
		dispatch
	}, payload) {
		const {
			skuId,
			value,
			currentBuyNum,
		} = payload;
		// 如果当前购买的数量小于1，则需要将该商品从购物车中删除，否则进行购物车数量的修改
		if (currentBuyNum < 1) {
			dispatch('deleteShopAction', payload)
		} else {
			await this._vm.$u.api.getAddToCart({
				skuId: skuId,
				skuNum: value,
			})
			commit('changeSkuNumMutation', payload)
		}

	},
	// 删除购物车
	async deleteShopAction({
		commit,
		dispatch
	}, payload) {
		const {
			skuId,
			value,
			currentBuyNum,
			isCart
		} = payload;
		await this._vm.$u.api.deleteCart(skuId);
		await commit('deleteShopMutation', skuId)
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
