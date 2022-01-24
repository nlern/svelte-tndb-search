import type { Locals } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

// GET /movies/[uid].json
export const get: RequestHandler<Locals> = async (request) => {
	const uid = request.params.uid;

	if (!uid) {
		return { body: null };
	}
	// request.locals.userid comes from src/hooks.js
	const response = await api(request, `movie/${uid}?language=en-US`);

	if (response.status === 404) {
		// no movies found.
		// start with an empty array
		return { body: null };
	}

	return response;
};
