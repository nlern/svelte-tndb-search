<script lang="ts">
	import { onMount } from 'svelte';

	// import AutoComplete from 'simple-svelte-autocomplete';
	// const colors = ['White', 'Red', 'Yellow', 'Green', 'Blue', 'Black'];
	// let selectedColor;
	let formEl: HTMLElement | null;
	let x: number = 0;
	let w: number = 0;
	let t: number = 0;
	onMount(() => {
		const d = formEl.getBoundingClientRect();
		x = d.x;
		w = d.width;
		t = d.bottom;
	});
</script>

<form class="flex justify-center items-center relative" autocomplete="off" bind:this={formEl}>
	<input
		type="text"
		name="q"
		id="query"
		class="h-8 p-2 w-full rounded border-1 border-gray-300"
		focus="border-3 outline-none border-blue-300"
		placeholder="Search for movies"
	/>
	{#if false}
		<ul
			class="z-10 bg-white border border-gray-300 fixed"
			style={`left:${x}px;width:${w}px;top:${t}px`}
		>
			<li class="h-8 p-1 border-b-1 border-gray-300">a</li>
			<li class="h-8 p-1 border-b-1 border-gray-300">a</li>
			<li class="h-8 p-1 border-b-1 border-gray-300">a</li>
			<li class="h-8 p-1">a</li>
		</ul>
	{/if}
</form>
<!-- <div class="flex justify-center items-center">
	<AutoComplete
		items={colors}
		bind:selectedItem={selectedColor}
		className="rounded border-1 border-gray-300 focus:border-gray-600 focus:outline-2 focus:shadow-md focus:outline-blue-300"
	/>
</div> -->
