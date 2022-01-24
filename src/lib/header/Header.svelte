<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import Search from '$lib/Search.svelte';
</script>

<header class="h-16 py-2 px-4 border-1 bg-gray-800 color-gray-300 border-gray-800">
	<div class="container flex justify-center items-center max-w-xl m-auto gap-4">
		<div class="w-8">
			<a href="/">
				<img src={logo} alt="SvelteKit" />
			</a>
		</div>

		<div class="flex-1">
			<Search />
		</div>

		<nav>
			<ul class="flex list-none gap-2">
				<li class:active={$page.url.pathname === '/about'}>
					<a sveltekit:prefetch href="/about">About</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
