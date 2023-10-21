<script lang="ts">
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { t } from '$lib';
	import Image from '$lib/components/Image.svelte';
	import Corsica from '$lib/components/svg/Corsica.svelte';
	import SelectLanguage from '$lib/components/SelectLanguage.svelte';

	export let compact = false;
</script>

<header
	class="h-64 transition-all duration-500 flex justify-center items-center sticky top-0 px-8 overflow-hidden isolate z-50"
	class:-translate-y-24={compact}
>
	<div class="container flex justify-between items-center">
		<div
			class="transition-container duration-500 z-10"
			class:scale-[0.8]={compact}
			class:translate-x-[-1rem]={compact}
			class:translate-y-12={compact}
			class:text-white={compact}
		>
			<div
				class="flex flex-col md:flex-row items-center gap-2 md:gap-6 cursor-pointer"
				aria-label="Go to home page"
				tabindex="0"
				role="button"
				on:click={() => {
					goto('/');
				}}
				on:keydown={(event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						goto('/');
					}
				}}
			>
				<Corsica class="transition-all duration-100" />
				<div class="flex flex-col items-center md:items-start">
					<span class="font-header transition-all duration-100 text-xl sm:text-2xl leading-tight"
						>Villa</span
					>
					<span class="font-header transition-all duration-100 text-3xl sm:text-5xl leading-tight"
						>Casella</span
					>
				</div>
			</div>
		</div>

		<div
			class="transition-container duration-500 md:opacity-100 z-10 relative"
			class:md:text-white={compact}
			class:opacity-0={compact}
			class:opacity-100={!compact}
			class:translate-y-12={compact}
		>
			<nav
				class="items-end gap-2 md:gap-10 flex md:flex flex-col md:flex-row font-header text-2xl leading-10"
			>
				<a
					href="/"
					class="transition-all pointer-events-none md:pointer-events-auto"
					class:text-4xl={$page.url.pathname === '/'}
					class:pointer-events-auto={!compact}>{$t('HOME')}</a
				>
				<a
					href="/activities"
					class="transition-all pointer-events-none md:pointer-events-auto"
					class:text-4xl={$page.url.pathname === '/activities'}
					class:pointer-events-auto={!compact}>{$t('ACTIVITIES')}</a
				>
				<a
					href="/about"
					class="transition-all pointer-events-none md:pointer-events-auto"
					class:text-4xl={$page.url.pathname === '/about'}
					class:pointer-events-auto={!compact}>{$t('ABOUT')}</a
				>
			</nav>
			<SelectLanguage {compact} />
		</div>
	</div>

	<div
		class="absolute transition-all inset-0 opacity-60 bg-bl"
		class:bg-white={!compact}
		class:bg-blue-950={compact}
	/>

	{#if compact}
		<div
			in:fly={{ y: 100, duration: 250 }}
			out:fly={{ y: 100, duration: 250, delay: 200 }}
			class="absolute inset-0 -z-10 bg-sky-900"
		>
			<Image
				src={import('$lib/assets/sunset_3.jpeg')}
				brightness={1.25}
				alt="plage header background"
				offsetY={500}
				offsetRatioModifier={1}
				className="h-full w-full"
				minWidth={1000}
			/>
		</div>
	{:else}
		<div
			in:fly={{ y: -100, duration: 250 }}
			out:fly={{ y: -100, duration: 250, delay: 200 }}
			class="absolute inset-0 -z-10 bg-amber-100"
		>
			<Image
				src={import('$lib/assets/landscape_2.jpeg')}
				brightness={1.15}
				alt="landscape header background"
				offsetY={200}
				className="h-full w-full"
				minWidth={1400}
			/>
		</div>
	{/if}
</header>

<style>
	.transition-container {
		transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
			color 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
