<script lang="ts">
	import logo from '../logo.svg';
</script>

<div class="bg" />

<div class="flex-1 flex flex-col justify-center container mx-auto">
	<h1 class="text-24 font-semibold color-gray-300 drop-shadow-lg m-b-4">
		Welcome to <a href="https://www.themoviedb.org"
			><img src={logo} alt="tmdb logo" class="w-32 h-32 inline" /></a
		> Search
	</h1>
	<h2 class="text-10 font-normal color-gray-300 drop-shadow-lg italic">
		Try searching for your favourite movie in search bar above and select from results to see the
		movie info
	</h2>
</div>

<style>
	.bg {
		background-color: #333;
		background-image: url('/poster.jpg');
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		z-index: -2;
		position: fixed;
		height: 100%;
		width: 100%;
	}
</style>
