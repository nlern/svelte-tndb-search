<script lang="ts">
	import logo from '../logo.svg';
	import Search from '$lib/Search.svelte';
</script>

<header
	class="h-16 py-2 px-4 border-1 bg-gray-800/80 color-gray-300 border-gray-800 sticky top-0 z-100"
>
	<div class="container flex justify-center items-center max-w-xl m-auto gap-4">
		<div class="w-16">
			<a href="/">
				<img src={logo} alt="SvelteKit" />
			</a>
		</div>

		<div class="flex-1">
			<Search />
		</div>
	</div>
</header>
