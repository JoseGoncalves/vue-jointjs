import * as joint from 'jointjs';

export default {
	install: function (Vue) {
		Object.defineProperty(Vue.prototype, '$joint', { value: joint });
	}
};
