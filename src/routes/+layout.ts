import type { LayoutLoad } from './$types';
import { loadTranslations } from '$lib';

export const load = (async ({ data, url }) => {
	const { locale } = data;
	await loadTranslations(locale || 'fr', url.pathname);

	return data;
}) satisfies LayoutLoad;
