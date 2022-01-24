<script lang="ts">
	import { movie } from '$lib/stores/movie';
	import type { MovieInfoResponse } from 'src/types';
	import { format } from 'date-fns';

	let movieInfo: MovieInfoResponse = null;
	let releaseDate: string = null;

	$: if (movieInfo) {
		releaseDate = format(new Date(movieInfo.release_date), 'd MMM, yyyy');
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
	<article class="h-full max-w-4xl p-4 mt-20 p-8 flex-1 flex flex-col justify-center">
		<header class="mb-4">
			<h1 class="text-18 color-white font-semibold drop-shadow-lg">
				{movieInfo.title}
			</h1>
			<h2 class="text-8 color-gray-200 font-normal drop-shadow-lg italic">
				{movieInfo.tagline}
			</h2>
			<section>
				<p class="flex justify-between items-center">
					<span class="text-4 color-gray-300 align-middle"><em>Release Date: </em>{releaseDate}</span>
					<span class="text-4 border color-gray-800 p-2 rounded bg-gray-400 font-semibold">{movieInfo.runtime} minutes</span>
				</p>
			</section>
		</header>
		<p class="text-5 text-gray-300 drop-shadow-lg text-justify mb-6">
			{movieInfo.overview}
		</p>
		<section class="flex gap-4">
			{#each movieInfo.genres as genre (genre.id)}
				<div class="genre border border-gray-400 color-gray-300 p-2 rounded-1">{genre.name}</div>
			{/each}
		</section>
	</article>
{/if}
