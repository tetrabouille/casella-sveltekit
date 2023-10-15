<script>
	import LoadingImage from '$lib/components/LoadingImage.svelte';
	import PerspectiveScrollLayout from '$lib/components/PerspectiveScrollLayout/PerspectiveScrollLayout.svelte';
</script>

<PerspectiveScrollLayout let:PerspectiveSlide>
	<div class="top-divider bg-yellow-50 h-20 z-10" />
	<svelte:fragment slot="background" let:PerspectiveBackground>
		<PerspectiveBackground>
			<div class="h-20" />
			<LoadingImage
				className="h-[700px] w-full"
				alt="Garden view with water-pool"
				src={import('$lib/assets/piscine_1.jpg')}
				brightness="0.6"
				minWidth={1000}
				offsetY={150}
			/>
		</PerspectiveBackground>
		<PerspectiveBackground>
			<LoadingImage
				className="h-[900px] w-full"
				alt="Garden view with water-pool"
				src={import('$lib/assets/piscine_3.jpg')}
				brightness="0.6"
				minWidth={1000}
				offsetY={-100}
			/>
		</PerspectiveBackground>
		<PerspectiveBackground>
			<LoadingImage
				className="h-[700px] w-full"
				alt="Garden view with water-pool"
				src={import('$lib/assets/chill_1.jpg')}
				brightness="0.6"
				minWidth={1000}
				offsetY={-100}
			/>
		</PerspectiveBackground>
	</svelte:fragment>
	<PerspectiveSlide className="flex flex-col justify-stretch">
		<div class="h-[500px]">
			<div class="content flex justify-center bg-black/30 relative">
				<div class="mt-14 ml-4 sm:ml-10 md:ml-20 container">
					<h1 class="text-6xl md:text-8xl font-header text-yellow-100 font-bold">Bienvenue</h1>
					<div class="text-2xl md:text-4xl font-header text-yellow-50">à la Villa Casella</div>
				</div>
			</div>
		</div>
		<div class="bg-yellow-50 py-12 px-8 flex justify-center flex-grow">
			<div class="container">
				<div class="ml-auto mr-4 max-w-xl space-y-5">
					<h2 class="font-header text-2xl md:text-4xl text-indigo-900">
						Un coin de paradis en pleine nature
					</h2>
					<p class="font-body text-base md:text-xl text-indigo-950">
						Le cœur de la Villa est une ancienne bergerie, construite dans les années 1920, ce que
						l’on peut déduire de l’épaisseur importante des murs. Elle est adossée à d’anciennes
						constructions de pierres sèches du lieudit Casella, qui comporte tout un ensemble de
						Baracuns que vous pouvez visiter librement. Vous verrez, le lieu recèle un certain
						mystère … La villa a ensuite été agrandie et rénovée pour un usage de domicile de 1970 à
						nos jours. Elle dispose d’un grand salon avec un coin télé et lecture, de deux coins
						canapé confortables, d’une grande cuisine entièrement équipée, d’une salle de bain avec
						baignoire et d’une salle d’eau, de deux toilettes, et enfin de 3 chambres adultes et
						d’une chambre enfant de deux places. Toutes les chambres possèdent de spacieux placards.
					</p>
				</div>
			</div>
		</div>
	</PerspectiveSlide>
	<PerspectiveSlide className="flex flex-col align-stretch">
		<div class="h-[700px]">
			<div class="content flex justify-center bg-black/30 relative">
				<div class="mt-14 ml-4 sm:ml-10 md:ml-20 container">
					<h1 class="text-6xl md:text-8xl font-header text-yellow-100 font-bold">Bienvenue</h1>
					<div class="text-2xl md:text-4xl font-header text-yellow-50">à la Villa Casella</div>
				</div>
			</div>
		</div>
		<div class="bg-yellow-50 py-12 px-8 flex justify-center flex-grow">
			<div class="container">
				<div class="ml-auto mr-4 max-w-xl space-y-5">
					<h2 class="font-header text-2xl md:text-4xl text-indigo-900">
						Un coin de paradis en pleine nature
					</h2>
					<p class="font-body text-base md:text-xl text-indigo-950">
						Le cœur de la Villa est une ancienne bergerie, construite dans les années 1920, ce que
						l’on peut déduire de l’épaisseur importante des murs. Elle est adossée à d’anciennes
						constructions de pierres sèches du lieudit Casella, qui comporte tout un ensemble de
						Baracuns que vous pouvez visiter librement. Vous verrez, le lieu recèle un certain
						mystère … La villa a ensuite été agrandie et rénovée pour un usage de domicile de 1970 à
						nos jours. Elle dispose d’un grand salon avec un coin télé et lecture, de deux coins
						canapé confortables, d’une grande cuisine entièrement équipée, d’une salle de bain avec
						baignoire et d’une salle d’eau, de deux toilettes, et enfin de 3 chambres adultes et
						d’une chambre enfant de deux places. Toutes les chambres possèdent de spacieux placards.
					</p>
				</div>
			</div>
		</div>
	</PerspectiveSlide>
	<PerspectiveSlide className="flex flex-col align-stretch">
		<div class="h-[600px]">
			<div class="content flex justify-center bg-black/30 relative">
				<div class="mt-14 ml-4 sm:ml-10 md:ml-20 container">
					<h1 class="text-6xl md:text-8xl font-header text-yellow-100 font-bold">Bienvenue</h1>
					<div class="text-2xl md:text-4xl font-header text-yellow-50">à la Villa Casella</div>
				</div>
			</div>
		</div>
		<div class="bg-yellow-50 py-12 px-8 flex justify-center h-full">
			<div class="container">
				<div class="ml-auto mr-4 max-w-xl space-y-5">
					<h2 class="font-header text-2xl md:text-4xl text-indigo-900">
						Un coin de paradis en pleine nature
					</h2>
					<p class="font-body text-base md:text-xl text-indigo-950">
						Le cœur de la Villa est une ancienne bergerie, construite dans les années 1920, ce que
						l’on peut déduire de l’épaisseur importante des murs. Elle est adossée à d’anciennes
						constructions de pierres sèches du lieudit Casella, qui comporte tout un ensemble de
						Baracuns que vous pouvez visiter librement. Vous verrez, le lieu recèle un certain
						mystère … La villa a ensuite été agrandie et rénovée pour un usage de domicile de 1970 à
						nos jours. Elle dispose d’un grand salon avec un coin télé et lecture, de deux coins
						canapé confortables, d’une grande cuisine entièrement équipée, d’une salle de bain avec
						baignoire et d’une salle d’eau, de deux toilettes, et enfin de 3 chambres adultes et
						d’une chambre enfant de deux places. Toutes les chambres possèdent de spacieux placards.
					</p>
				</div>
			</div>
		</div>
	</PerspectiveSlide>
</PerspectiveScrollLayout>

<style lang="scss">
	.content::after {
		content: '';
		position: absolute;
		top: 100%;
		height: 20px;
		width: 100%;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.3) 0%,
			rgba(0, 0, 0, 0.1) 90%,
			rgba(0, 0, 0, 0) 100%
		);
	}
	.top-divider {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			bottom: 100%;
			height: 1000px;
			width: 100%;
			background: inherit;
		}
	}
</style>
