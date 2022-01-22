import type { Locals } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

// GET /movies.json
export const get: RequestHandler<Locals> = async (request) => {
	const query = request.url.searchParams.get('q');

	if (!query) {
		return { body: [] };
	}
	// request.locals.userid comes from src/hooks.js
	const response = await api(
		request,
		`search/movie?language=en-US&query=${query}&page=1&include_adult=false`
	);

	if (response.status === 404) {
		// no movies found.
		// start with an empty array
		return { body: [] };
	}

	return response;
};
