<script lang="ts">
	import PerspectiveItem from './PerspectiveItem.svelte';
	import { getContext } from './PerspectiveScrollLayout.context';

	export let className = '';

	const { getNextBackgroundIndex } = getContext();
	const index = getNextBackgroundIndex();
</script>

<PerspectiveItem isBackground {index} {className}>
	<slot />
</PerspectiveItem>
