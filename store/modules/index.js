const state = {
	initData: '初始Vuex数据'
};
const getters = {};
const mutations = {};
const actions = {
	async getPosts({
		commit
	}) {
		const result = await this._vm.$u.api.getPosts()
		console.log(result);
	}
};
export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
