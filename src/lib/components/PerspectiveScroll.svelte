<script lang="ts">
	import IsVisible from './IsVisible.svelte';

	export let wrapperClass = '';
	export let backgroundClass = '';
	export let depth = 1;
	export let translateY = 0;

	let backgroundVisible = false;

	const handleVisible = (visible: boolean) => {
		backgroundVisible = visible;
	};

	let innerHeight = 0;

	$: formattedTranslateY = `${-(innerHeight * 0.25) * depth + translateY * 2}px`;
</script>

<svelte:window bind:innerHeight />

<div class="preserve-3d relative {wrapperClass}">
	<div
		class="background -z-10 absolute inset-0 overflow-hidden {backgroundClass}"
		class:opacity-0={!backgroundVisible}
		style:--depth={depth}
		style:--translate-y={formattedTranslateY}
	>
		<IsVisible onVisible={handleVisible} initialVisible={true} class="absolute inset-0" />
		<slot name="background" />
	</div>
	<slot />
</div>

<style lang="scss">
	.background {
		transform: translateZ(calc(var(--depth) * var(--perspective) * -1))
			scale(calc(var(--depth) + 1)) translateY(var(--translate-y));
	}
</style>
