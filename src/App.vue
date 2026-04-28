<script setup>
console.log('[App] Setup');

import { useJoint } from '@/composables/joint';
import JointPaper from '@/components/JointPaper.vue';

const background = { color: 'antiquewhite' };
const gridSize = 10;
const drawGrid = { name: 'mesh' };

async function setupGraph(graph) {
	console.log('[App] Setup Graph:', graph);

	const joint = await useJoint();
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

<template>
	<Suspense>
		<joint-paper
			:background
			:grid-size
			:draw-grid
			@init="setupGraph"
		/>
		<template #fallback>
			Loading…
		</template>
	</Suspense>
</template>
