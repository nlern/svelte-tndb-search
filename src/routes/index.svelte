<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Welcome from '$lib/Welcome/Welcome.svelte';
</script>

<svelte:head>
	<title>Home - TMDB Movie Search</title>
	<meta
		name="description"
		content="An app to search and view movie info using TMDB movie API. Build using svelte"
	/>
</svelte:head>

<Welcome />
