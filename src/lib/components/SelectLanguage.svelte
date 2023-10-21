<script lang="ts">
	import { setLocale, locales, locale } from '$lib';

	export let compact = false;

	let opened = false;

	$: handleSelectLanguage = (locale: string) => {
		setLocale(locale);
		opened = false;
	};

	// put currentLocale first
	$: sortedLocales = [currentLocale, ...$locales.filter((l) => l !== currentLocale)];
	$: currentLocale = $locale;

	let menuRef: HTMLDivElement;
</script>

<div
	bind:this={menuRef}
	role="menu"
	tabindex="-1"
	class="flex items-center font-body font-bold border border-black rounded-full
			transition-[width] duration-250 delay-100 overflow-hidden text-sm
			absolute right-0 -bottom-10"
	class:border-white={compact}
	class:w-14={!opened}
	class:w-28={opened}
	on:touchstart={() => (opened = true)}
	on:mouseenter={() => (opened = true)}
	on:mouseleave={() => (opened = false)}
>
	{#each sortedLocales as locale, index}
		<button
			class="w-14 flex-shrink-0"
			class:rounded-l-full={index === 0}
			class:border-r-0={index === 0}
			class:rounded-r-full={index === $locales.length - 1}
			class:border-l-0={index === $locales.length - 1}
			on:click={() => handleSelectLanguage(locale)}
			on:focus={() => (opened = true)}
			on:blur={() => (opened = false)}
			disabled={index === 0}
		>
			{locale.toUpperCase()}
		</button>
	{/each}
</div>
