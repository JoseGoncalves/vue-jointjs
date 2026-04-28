let jointPromise = null;

export function useJoint() {
	// Return the already-loading or loaded instance
	if (jointPromise) return jointPromise;

	jointPromise = (async () => {
		// Lazy load JS modules
		const [{ dia }, { standard }] = await Promise.all([
			import('@joint/core/src/core.mjs'),
			import('@joint/core/src/shapes'),
		]);

		// Return the JointJS instance
		return {
			dia,
			shapes: { standard },
		};
	})();

	return jointPromise;
}
