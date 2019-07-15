<template>
	<div ref="joint"></div>
</template>

<script>
export default {
	name: 'JointPaper',

	props: {
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
	},

	created() {
		this.name = this.$options.name;
		console.log(`[${this.name}] Created`);

		this.graph = new this.$joint.dia.Graph({}, { cellNamespace: this.$joint.shapes });
	},

	mounted() {
		console.log(`[${this.name}] Mounted:`, this.$refs.joint);

		new this.$joint.dia.Paper({
			el: this.$refs.joint,
			cellViewNamespace: this.$joint.shapes,
			model: this.graph,
			width: this.width,
			height: this.height,
			gridSize: this.gridSize,
			drawGrid: this.drawGrid,
			background: this.background,
			interactive: !this.readonly
		});

		this.$emit('init', this.graph);
	}
};
</script>

<style scoped>
</style>
