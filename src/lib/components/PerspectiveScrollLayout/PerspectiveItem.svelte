<script lang="ts">
	import { getContext } from './PerspectiveScrollLayout.context';

	export let index: number;
	export let isBackground = false;
	export let className = '';

	const { getMinHeight, heights, setMinHeight, depth } = getContext();

	$: console.log('PerspectiveItem', $depth);

	let elementRef: HTMLDivElement;
	$: depthRatio = isBackground ? $depth + 1 : 1;
	$: clientHeight = elementRef?.clientHeight || 0;
	$: setMinHeight(index, clientHeight * depthRatio);
	$: minHeight = `${getMinHeight(index, $heights, depthRatio)}px`;
</script>

<div class="space {className}" style:--min-height={minHeight} bind:this={elementRef}>
	<slot />
</div>

<style lang="scss">
	.space {
		min-height: var(--min-height);
	}
</style>
