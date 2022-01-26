<script lang="ts">
	import { movie } from '$lib/stores/movie';
	import type { MovieInfoResponse } from 'src/types';

	const currencyFormatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	});

	const yearFormatter = new Intl.DateTimeFormat('default', {
		year: 'numeric'
	});

	let movieInfo: MovieInfoResponse | null = null;
	let releaseDate: string = '';
	let budget: string = '';
	let revenue: string = '';
	let producers: string = '';
	let profit: boolean = true;

	$: if (movieInfo) {
		if (movieInfo.release_date) {
			releaseDate = yearFormatter.format(new Date(movieInfo.release_date));
		} else {
			releaseDate = '';
		}
		budget = currencyFormatter.format(Math.round(movieInfo.budget));
		revenue = currencyFormatter.format(movieInfo.revenue);
		profit = movieInfo.revenue > movieInfo.budget;
		if (Array.isArray(movieInfo.production_companies)) {
			producers = movieInfo.production_companies.map((p) => p.name).join(', ');
		}
	}

	movie.subscribe(async (mv) => {
		movieInfo = null;
		if (!mv || !mv.id) {
			return;
		}
		const url = `./movies/${mv.id}.json`;
		const response = await fetch(url);
		movieInfo = (await response.json()) as MovieInfoResponse;
	});
</script>

{#if movieInfo}
	<article class="h-full max-w-4xl p-4 m-t-20 p-8 flex-1 flex flex-col justify-center">
		<header class="m-b-4">
			<h1 class="text-18 color-white font-semibold drop-shadow-lg">
				{movieInfo.title}
			</h1>
			<h2 class="text-8 color-gray-200 font-normal drop-shadow-lg italic m-b-4">
				{movieInfo.tagline}
			</h2>
			<section>
				<p class="flex items-center gap-6">
					<span class="text-4 color-gray-300 p-2 rounded bg-gray-600"
						>{movieInfo.runtime} minutes</span
					>
					<span
						class="text-4 color-gray-200 p-2 rounded"
						class:bg-red-600={movieInfo.vote_average <= 3}
						class:bg-yellow-600={movieInfo.vote_average > 3 && movieInfo.vote_average < 8}
						class:bg-green-600={movieInfo.vote_average >= 8}>{movieInfo.vote_average}</span
					>
				</p>
			</section>
		</header>
		<p class="text-5 text-gray-300 drop-shadow-lg text-justify mb-6">
			{movieInfo.overview}
		</p>
		<section class="flex gap-4 m-b-6">
			{#each movieInfo.genres as genre (genre.id)}
				<div class="color-gray-300 p-2 rounded-1 bg-sky-600/50">{genre.name}</div>
			{/each}
		</section>
		<section class="flex flex-row gap-12 m-b-6">
			<section>
				<header>
					<h2 class="text-8 color-gray-200 font-normal drop-shadow-lg">Budget</h2>
				</header>
				<p class="text-12 color-green-500 font-normal">
					{budget}
				</p>
			</section>

			<section>
				<header>
					<h2 class="text-8 color-gray-200 font-normal drop-shadow-lg">Revenue</h2>
				</header>
				<p class="text-12 font-normal" class:color-green-500={profit} class:color-red-500={!profit}>
					{revenue}
				</p>
			</section>
		</section>

		<section class="text-4 color-gray-300">
			© {releaseDate}
			{producers}
		</section>
	</article>
{/if}
