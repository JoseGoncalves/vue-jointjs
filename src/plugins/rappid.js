import 'jointjs/dist/joint.core.css';

import { dia } from 'jointjs/src/core.mjs';
import * as standard from 'jointjs/src/shapes/standard.mjs';

export default {
	install: app => {
		const joint = { dia };
		joint.shapes = { standard };
		app.config.globalProperties.$joint = joint;
		app.provide('joint', joint);
	}
};
