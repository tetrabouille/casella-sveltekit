import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

import { locales } from '$lib';

const langParam = 'lang';

export const load = (async (event) => {
	const newLocale = event.url.searchParams.get(langParam);
	if (newLocale) {
		if (newLocale && locales.get().includes(newLocale))
			event.cookies.set(langParam, newLocale, { path: '/' });
		event.url.searchParams.delete(langParam);
		// Redirect to remove the GET var
		throw redirect(303, event.url.pathname);
	}

	// Get the locale from the cookie
	return { locale: event.cookies.get(langParam) };
}) satisfies LayoutServerLoad;
