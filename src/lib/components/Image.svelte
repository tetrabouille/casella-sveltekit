<script lang="ts">
	export let active = true;
	export let animate = true;
	export let brightness = 1;
	export let opacity = 1;
	export let offsetY = 0;
	export let src: Promise<typeof import('*.png')>;
	export let alt: string;
	export let minWidth = 0;
	export let className = '';
	export let offsetRatioModifier = 0;

	let loadedSrc: string;
	$: if (active)
		src.then((url) => {
			loadedSrc = url.default;
		});

	$: loaded = !!loadedSrc;
	let innerWidth = 0;
	$: imageWidth = innerWidth > minWidth ? innerWidth : minWidth;
	$: offsetRatio = imageWidth / (2500 + offsetRatioModifier * imageWidth);
</script>

<svelte:window bind:innerWidth />

<div class="flex justify-center {className}">
	<div
		style:--src={`url('${loadedSrc}')`}
		style:--opacity-min={animate ? '0' : '1'}
		style:--opacity-max={opacity}
		style:--brightness={brightness}
		style:--offset-y="{offsetY}px"
		style:--offset-ratio={offsetRatio}
		style:--min-width="{minWidth}px"
		class:loaded
		class={className}
	>
		<img src={loadedSrc} {alt} class="invisible absolute pointer-events-none h-0 w-0" />
	</div>
</div>

<style lang="scss">
	div {
		overflow: hidden;
		opacity: var(--opacity-min);
		min-width: var(--min-width);
		transition: opacity 0.28s ease-in-out;

		filter: brightness(var(--brightness));
		background-image: var(--src);
		background-size: cover;
		background-position: 50% calc(50% + var(--offset-y, 0) * var(--offset-ratio));
		background-repeat: no-repeat;

		&.loaded {
			opacity: var(--opacity-max);
		}
	}
</style>
