<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/tailwind.css';
	import Header from '$lib/header/Header.svelte';
	import { movie } from '$lib/stores';

	let backgroundImage = '';

	movie.subscribe((movie) => {
		if (movie) {
			backgroundImage = `${movie.backdrop_path}`;
			const bgEl = document.querySelector('#bg') as HTMLElement | null;
			if (bgEl) {
				bgEl.style.backgroundImage = `url(https://image.tmdb.org/t/p/w1280/${backgroundImage})`;
			}
		}
	});
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
