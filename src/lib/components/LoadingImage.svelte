<script lang="ts">
	export let src: Promise<typeof import('*.png')>;
	export let alt: string;
	export let className = '';

	import UseIntersection from './UseIntersection.svelte';
	import Image from './Image.svelte';
</script>

<UseIntersection once let:intersecting {className}>
	<Image active={intersecting} {alt} {src} {className} {...$$restProps} />
</UseIntersection>
