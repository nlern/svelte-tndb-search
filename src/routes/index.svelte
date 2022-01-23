<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import MovieInfo from '$lib/MovieInfo.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<MovieInfo />
