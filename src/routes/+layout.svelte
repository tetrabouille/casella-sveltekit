<script lang="ts">
	import '../app.css';

	import IsVisible from '$lib/components/IsVisible.svelte';
	import Header from './Header.svelte';

	let compact = false;
</script>

<div class="h-screen w-screen overflow-y-scroll relative">
	<IsVisible
		onVisible={(visible) => {
			compact = !visible;
		}}
		initialVisible={true}
		class="absolute top-36"
	/>
	<Header {compact} />
	<div class="container mx-auto mt-8">
		<slot />
	</div>
</div>
