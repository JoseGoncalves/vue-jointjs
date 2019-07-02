import 'jointjs/dist/joint.core.css';

import * as joint from 'jointjs/dist/joint.core';

export default {
	install: function (Vue) {
		Object.defineProperty(Vue.prototype, '$joint', { value: joint });
	}
};
