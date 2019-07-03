import 'jointjs/dist/joint.core.css';

import { dia } from 'jointjs/src/core.mjs';
import * as standard from 'jointjs/src/shapes/standard.mjs';

export default {
	install: function (Vue) {
		let joint = { dia };
		joint.shapes = { standard };
		Object.defineProperty(Vue.prototype, '$joint', { value: joint });
	}
};
