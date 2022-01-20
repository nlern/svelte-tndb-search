<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '@unocss/reset/tailwind.css';
	import 'uno.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
