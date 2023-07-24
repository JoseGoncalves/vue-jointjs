<template>
	<joint-paper
		:background="background"
		:grid-size="gridSize"
		:draw-grid="drawGrid"
		@init="setupGraph"
	/>
</template>

<script setup>
console.log('[App] Setup');

import { inject } from 'vue';
import JointPaper from '@/components/JointPaper.vue';

const joint = inject('joint');
const background = { color: 'antiquewhite' };
const gridSize = 10;
const drawGrid = { name: 'mesh' };

function setupGraph(graph) {
	console.log('[App] Setup Graph:', graph);

	const rect = new joint.shapes.standard.Rectangle();
	rect.position(100, 30);
	rect.resize(100, 40);
	rect.attr({
		body: {
			fill: 'blue'
		},
		label: {
			text: 'Hello',
			fill: 'white'
		}
	});
	rect.addTo(graph);

	const rect2 = rect.clone();
	rect2.translate(300, 0);
	rect2.attr('label/text', 'World!');
	rect2.addTo(graph);

	const link = new joint.shapes.standard.Link();
	link.source(rect);
	link.target(rect2);
	link.addTo(graph);
}
</script>
