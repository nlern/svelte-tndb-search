import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import UnoCss from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';
import presetAttributify from '@unocss/preset-attributify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [
				UnoCss({
					extractors: [extractorSvelte],
					presets: [
						presetUno(),
						presetAttributify(),
						presetIcons({
							extraProperties: {
								display: 'inline-block',
								'vertical-align': 'middle'
							}
						})
					]
				})
			]
		}
	}
};

export default config;
