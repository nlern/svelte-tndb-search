<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/tailwind.css';
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
</script>

<Header />

<main class="m-b-10">
	<slot />
</main>

<footer class="flex flex-col min-h-30 justify-center items-center p-4 gap-2">
	<p class="text-4 color-gray-300">
		Designed and developed by <a
			href="https://github.com/nlern"
			class="hover:color-green-500 transition-all duration-150">Shantanu Dutta</a
		>
	</p>
	<p class="text-4 color-gray-300">
		<a
			href="https://github.com/nlern/svelte-tndb-search"
			class="flex items-center gap-2 hover:color-green-500 transition-all duration-150"
			><span class="i-carbon-logo-github" />
			View Source code</a
		>
	</p>
</footer>
