<script lang="ts">
	import { onMount } from 'svelte';

	export let once = false;
	export let top = 0;
	export let bottom = 0;
	export let left = 0;
	export let right = 0;
	export let className = '';

	let intersecting = false;
	let container: HTMLElement;

	onMount(() => {
		const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;

		const observer = new IntersectionObserver(
			(entries) => {
				intersecting = entries[0].isIntersecting;
				if (intersecting && once) {
					observer.unobserve(container);
				}
			},
			{
				rootMargin
			}
		);

		observer.observe(container);
		return () => observer.unobserve(container);
	});
</script>

<div bind:this={container} class={className}>
	<slot {intersecting} />
</div>
