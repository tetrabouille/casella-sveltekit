<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import '../app.css';

	import IsVisible from '$lib/components/IsVisible.svelte';
	import Header from './Header.svelte';

	afterNavigate(() => {
		scrollWrapperRef.scrollTo(0, 0);
	});

	let compact = true;

	let scrollWrapperRef: HTMLDivElement;
</script>

<div
	class="perspective h-screen overflow-x-hidden overflow-y-scroll relative bg-yellow-50"
	bind:this={scrollWrapperRef}
>
	<IsVisible
		onVisible={(visible) => {
			compact = !visible;
		}}
		initialVisible={true}
		class="absolute top-96"
	/>
	<Header {compact} />
	<slot />

	<div class="mt-[1000px]" />
</div>

<style lang="scss">
	.perspective {
		perspective: var(--perspective);
	}
</style>
