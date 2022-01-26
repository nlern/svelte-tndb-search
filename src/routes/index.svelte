<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Welcome from '$lib/Welcome/Welcome.svelte';
</script>

<svelte:head>
	<title>Home - TMDB Movie Search</title>
</svelte:head>

<Welcome />
