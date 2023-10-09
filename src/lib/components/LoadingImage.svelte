<script lang="ts">
	export let src: Promise<typeof import('*.png')>;
	export let alt: string;

	import UseIntersection from './UseIntersection.svelte';
	import Image from './Image.svelte';
</script>

<UseIntersection once let:intersecting>
	<Image active={intersecting} {alt} {src} height={'400px'} />
</UseIntersection>
