<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header class="flex justify-center gap-4">
	<a href="https://kit.svelte.dev" class="self-center">
		<img src={logo} alt="SvelteKit" h-8 w-8 />
	</a>

	<div class="search">
		<!-- TODO put something else here? github link? -->
	</div>

	<nav>
		<ul class="flex list-none gap-4">
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
		</ul>
	</nav>
</header>

