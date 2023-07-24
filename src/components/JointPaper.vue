<template>
	<div ref="jointEl" />
</template>

<script setup>
console.log('[JointPaper] Setup');

import { inject, onMounted, ref } from 'vue';

const props = defineProps({
	width: {
		type: [String, Number],
		default: 800
	},
	height: {
		type: [String, Number],
		default: 600
	},
	gridSize: {
		type: Number,
		default: 1
	},
	drawGrid: {
		type: [Object, Boolean],
		default: false
	},
	background: {
		type: [Object, Boolean],
		default: false
	},
	readonly: {
		type: Boolean,
		default: false
	}
});

const emit = defineEmits(['init']);

const joint = inject('joint');

const jointEl = ref(null);

const graph = new joint.dia.Graph({}, { cellNamespace: joint.shapes });

onMounted(() => {
	console.log('[JointPaper] Mounted:', jointEl.value);

	new joint.dia.Paper({
		el: jointEl.value,
		cellViewNamespace: joint.shapes,
		model: graph,
		width: props.width,
		height: props.height,
		gridSize: props.gridSize,
		drawGrid: props.drawGrid,
		background: props.background,
		interactive: !props.readonly
	});

	emit('init', graph);
});
</script>
