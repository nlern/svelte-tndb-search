<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params, fetch }) => {
		const movieId = params['id'];
		const res = await fetch(`./${movieId}.json`);

		if (res.ok) {
			const movie = await res.json();

			return {
				props: { movie }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
  import MovieInfo from '$lib/MovieInfo.svelte';
import type { MovieInfoResponse } from 'src/types';

  export let movie: MovieInfoResponse;
</script>

<MovieInfo movieInfo={movie} />
