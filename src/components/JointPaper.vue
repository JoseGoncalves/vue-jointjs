<script setup>
console.log('[JointPaper] Setup');

import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import { useJoint } from '@/composables/joint';

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

const joint = await useJoint();

const jointRef = useTemplateRef('joint-ref');

const graph = new joint.dia.Graph({}, { cellNamespace: joint.shapes });

let paper;

onMounted(() => {
	console.log('[JointPaper] Mounted:', jointRef.value);

	paper = new joint.dia.Paper({
		el: jointRef.value,
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

onUnmounted(() => {
	paper.remove();
});
</script>

<template>
	<div ref="joint-ref" />
</template>
