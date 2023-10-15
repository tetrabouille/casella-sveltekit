<script lang="ts">
	export let className = '';
	export let depth = 1;
	export let translateY = 0;
</script>

<div
	class="background -z-10 absolute inset-0 {className}"
	style:--depth={depth}
	style:--translate-y="{translateY}px"
>
	<slot />
</div>

<style lang="scss">
	.background {
		transform: translateZ(calc(var(--depth) * var(--perspective) * -1))
			scale(calc(var(--depth) + 1)) translateY(var(--translate-y));
	}
</style>
