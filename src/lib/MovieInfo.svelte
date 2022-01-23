<script lang="ts">
	import { movie } from '$lib/stores/movie';
</script>

{#if $movie}
	<article class="h-full w-full flex-1 p-4 relative pointer-events-none">
		<h1
			class="text-36 color-white-300 absolute bottom-0 font-semibold w-2/3 drop-shadow-lg"
		>
			{$movie.title}
		</h1>
		<section class="absolute w-1/3 right-0 bottom-0 p-8">
			<div class="rounded-md p-4 text-justify">
        <em class="text-5 text-gray-300 drop-shadow">
          {$movie.overview}
        </em>
      </div>
		</section>
	</article>
{/if}
