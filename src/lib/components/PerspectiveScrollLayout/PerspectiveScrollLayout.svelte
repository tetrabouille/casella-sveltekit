<script lang="ts">
	import { initContext } from './PerspectiveScrollLayout.context';
	import PerspectiveBackground from './PerspectiveBackground.svelte';
	import PerspectiveSlide from './PerspectiveSlide.svelte';
	import PerspectiveWrapper from '../PerspectiveWrapper.svelte';

	export let translateY = 0;
	export let depth = 1;
	export let className = '';

	initContext(depth);
</script>

<div class="preserve-3d relative h-[100vh] {className}">
	<PerspectiveWrapper {depth} {translateY}>
		<slot name="background" {PerspectiveBackground} />
	</PerspectiveWrapper>
	<slot {PerspectiveSlide} />
</div>
