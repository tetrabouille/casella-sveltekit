<script lang="ts">
	import { t } from '$lib';

	export let className = '';

	let hovered: boolean = false;
</script>

<a
	class="py-1 px-3 border border-yellow-50 hover:border-yellow-100 hover:text-yellow-100 rounded-full font-body text-2xl
        w-max flex overflow-hidden hover:bg-indigo-800/50 transition-all {className}"
	href="https://conciergeriebonifacienne.com/pf/villa-casella-location-bonifacio/"
	target="_blank"
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	<div class="relative">
		<span>{$t('RENT_NOW')}</span>
		<div class="absolute -right-10 top-0 h-full flex items-center">
			<span class="iconoir-arrow-right-circle my-auto ml-2" />
		</div>
	</div>

	<div class="h-1 w-0 hover:w-[36px] transition-all" class:w-[36px]={hovered} />
</a>

<style lang="scss">
</style>
