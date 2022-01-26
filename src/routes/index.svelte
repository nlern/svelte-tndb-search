<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Welcome from '$lib/Welcome/Welcome.svelte';
</script>

<svelte:head>
	<title>Home - TMDB Movie Search</title>
	<meta property="og:title" content="Home - TMDB Movie Search" />
	<meta property="twitter:title" content="Home - TMDB Movie Search" />
	<meta
		name="description"
		content="An app to search and view movie info using TMDB movie API. Build using svelte"
	/>
	<meta
		name="twitter:description"
		content="An app to search and view movie info using TMDB movie API. Build using svelte"
	/>
</svelte:head>

<Welcome />
