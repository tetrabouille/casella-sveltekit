<script lang="ts">
	export let active = true;
	export let animate = true;
	export let brightness = 1;
	export let opacity = 1;
	export let offsetY = 0;
	export let src: Promise<typeof import('*.png')>;
	export let alt: string;
	export let height: string = '100%';
	export let width: string = '100%';
	export let minWidth: string = 'unset';

	let loadedSrc: string;
	$: if (active)
		src.then((url) => {
			loadedSrc = url.default;
		});

	$: loaded = !!loadedSrc;
</script>

<div
	style:--src={`url('${loadedSrc}')`}
	style:--height={height}
	style:--width={width}
	style:--min-width={minWidth}
	style:--opacity-min={animate ? '0' : '1'}
	style:--opacity-max={opacity}
	style:--brightness={brightness}
	style:--offset-y="{offsetY}px"
	class:loaded
>
	<img src={loadedSrc} {alt} class="invisible absolute pointer-events-none h-0 w-0" />
</div>

<style lang="scss">
	div {
		overflow: hidden;
		opacity: var(--opacity-min);
		transition: opacity 0.28s ease-in-out;

		height: var(--height);
		width: var(--width);
		min-width: var(--min-width);

		filter: brightness(var(--brightness));
		background-image: var(--src);
		background-size: cover;
		background-position: 50% calc(50% + var(--offset-y, 0));
		background-repeat: no-repeat;

		&.loaded {
			opacity: var(--opacity-max);
		}
	}
</style>
