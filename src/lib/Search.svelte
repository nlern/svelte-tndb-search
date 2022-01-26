<script lang="ts">
	import { onMount } from 'svelte';
	import { Circle } from 'svelte-loading-spinners';
	import { movie as MovieStore } from '$lib/stores';
	import type { SearchResponse, SearchResultItem } from 'src/types';
	import { goto } from '$app/navigation';

	let inputEl: HTMLElement | null;
	let x: number = 0;
	let w: number = 0;
	let t: number = 0;
	let results: SearchResultItem[] | null = null;
	export let q: string | null = null;
	let fetching: boolean = false;
	let prevQ: string | null = null;
	let search = true;

	$: showResults = q && !fetching && results && search;
	$: hasQuery = q && !fetching;

	function setAutoCompletePosition() {
		if (inputEl) {
			const d = inputEl.getBoundingClientRect();
			x = d.x;
			w = d.width;
			t = d.bottom;
		}
	}

	let windowResizeTimer = null;
	function updateSearchResultsPosition() {
		if (windowResizeTimer) {
			clearTimeout(windowResizeTimer);
		}
		windowResizeTimer = setTimeout(() => {
			setAutoCompletePosition();
		}, 400);
	}

	function clearSearch() {
		q = null;
		prevQ = null;
	}

	function enableSearch() {
		search = true;
		results = [];
	}

	function disableSearch() {
		search = false;
		prevQ = null;
	}

	onMount(() => {
		setAutoCompletePosition();
	});

	let timer = null;

	function onQuery() {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(async () => {
			if (!q || q === prevQ || !search) {
				return;
			}
			fetching = true;
			prevQ = q;
			const url = `/movies.json?q=${encodeURI(q)}`;
			const response = await fetch(url);
			const parsed_response = (await response.json()) as SearchResponse;
			if (!parsed_response) {
				results = [];
			} else {
				results = parsed_response.results;
			}
			fetching = false;
		}, 400);
	}

	async function resultChosen(movie: SearchResultItem) {
		disableSearch();
		q = movie.title;
		MovieStore.set(movie);
		await goto('/movies/' + movie.id);
	}
</script>

<svelte:window on:resize={updateSearchResultsPosition} />

<form
	class="flex justify-center items-center relative"
	autocomplete="off"
	on:submit|preventDefault={() => {}}
>
	<input
		bind:value={q}
		bind:this={inputEl}
		on:input={onQuery}
		on:keydown={enableSearch}
		type="text"
		name="q"
		id="query"
		class="h-8 p-2 w-full rounded border-1 border-gray-300 bg-gray-600 border-gray-300 color-gray-400 focus:outline-none focus:border-0"
		placeholder="Search for movies"
	/>
	{#if showResults}
		<ul
			class="z-999 bg-white border fixed max-h-40 overflow-auto bg-gray-600 color-gray-400"
			style={`left:${x}px;width:${w}px;top:${t}px`}
		>
			{#each results as movie (movie.id)}
				<li
					class="min-h-8 p-2 border-b-1 bg-gray-600 color-gray-400 shadow cursor-pointer hover:bg-gray-500 hover:color-white"
					on:click={() => resultChosen(movie)}
				>
					{movie.title}
				</li>
			{/each}
		</ul>
	{/if}

	<div class="absolute right-1">
		{#if fetching}
			<Circle size="24" color="#FF3E00" unit="px" duration="1s" />
		{:else if hasQuery}
			<button class="i-carbon-close" on:click={clearSearch} />
		{/if}
	</div>
</form>
