import { setContext, getContext as svelteGetContext } from 'svelte';
import { writable } from 'svelte/store';

const ContextKey = 'PERSPECTIVE_SCROLL_LAYOUT';

let backgroundIndex = -1;
let slideIndex = -1;

const depth = writable<number>(0);
const heights = writable<number[]>([]);

export type PerspectiveScrollLayoutContext = typeof context;
const context = {
	getNextBackgroundIndex: () => {
		backgroundIndex += 1;
		return backgroundIndex;
	},
	getNextSlideIndex: () => {
		slideIndex += 1;
		return slideIndex;
	},
	getMinHeight: (index: number, heights: number[], depthRatio = 1) => {
		return (heights[index] || 0) / depthRatio;
	},
	setMinHeight: (index: number, height: number) => {
		heights.update((heights) => {
			const currentHeight = heights[index];
			if (currentHeight && currentHeight > height) return heights;

			heights[index] = height;
			return heights;
		});
	},
	heights,
	depth
};

export const initContext = (initDepth: number) => {
	resetContext();
	depth.set(initDepth);
	setContext(ContextKey, context);
};

export const resetContext = () => {
	depth.set;
	heights.set([]);
	backgroundIndex = -1;
	slideIndex = -1;
};

export const getContext = () => {
	return svelteGetContext<PerspectiveScrollLayoutContext>(ContextKey);
};
