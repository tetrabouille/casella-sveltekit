<script lang="ts">
	import PerspectiveItem from './PerspectiveItem.svelte';
	import { getContext } from './PerspectiveScrollLayout.context';

	export let className = '';

	const { getNextSlideIndex } = getContext();
	const index = getNextSlideIndex();
</script>

<PerspectiveItem {index} {className}>
	<slot />
</PerspectiveItem>
