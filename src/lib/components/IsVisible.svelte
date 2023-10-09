<script lang="ts">
	import { onMount } from 'svelte';

	export let top = 0;
	export let bottom = 0;
	export let left = 0;
	export let right = 0;
	export let initialVisible = false;
	export let onVisible: (visible: boolean) => void;

	let container: HTMLElement;
	let visible = initialVisible;

	onMount(() => {
		const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;

		const observer = new IntersectionObserver(
			(entries) => {
				visible = entries[0].isIntersecting;
			},
			{ rootMargin }
		);

		observer.observe(container);
		return () => observer.unobserve(container);
	});

	$: onVisible(visible);
</script>

<div bind:this={container} {...$$restProps} />

<style>
</style>
