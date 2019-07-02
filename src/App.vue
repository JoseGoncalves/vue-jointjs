<template>
	<joint-paper :background="background" :grid-size="gridSize" :draw-grid="drawGrid" @init="setupGraph" />
</template>

<script>
import JointPaper from '@/components/JointPaper';

export default {
	name: 'App',

	components: {
		JointPaper
	},

	data() {
		return {
			background: {
				color: 'antiquewhite'
			},
			gridSize: 10,
			drawGrid: {
				name: 'mesh'
			}
		};
	},

	methods: {
		setupGraph(graph) {
			const rect = new this.$joint.shapes.standard.Rectangle();
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

			const link = new this.$joint.shapes.standard.Link();
			link.source(rect);
			link.target(rect2);
			link.addTo(graph);
		}
	}
};
</script>

<style>
</style>
