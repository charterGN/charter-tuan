const postsUrl = '/posts';

const install = (Vue, vm) => {
	let getPosts = (params = {
		id: 1
	}) => vm.$u.get(postsUrl + `/${params.id}`);

	vm.$u.api = {
		getPosts
	};
}

export default {
	install
}
