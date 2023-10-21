import { goto } from '$app/navigation';

import I18n from 'sveltekit-i18n';

const config = {
	loaders: [
		{
			locale: 'en',
			key: '',
			loader: async () => (await import('./en.json')).default
		},
		{
			locale: 'fr',
			key: '',
			loader: async () => (await import('./fr.json')).default
		}
	]
};

const { t, locale, locales, loadTranslations, setLocale: setLocalI18n } = new I18n(config);

const setLocale = (newLocale: string) => {
	const url = new URL(window.location.href);
	url.searchParams.set('lang', newLocale);
	setLocalI18n(newLocale);
	goto(url, { keepFocus: true });
};

export { t, locale, locales, loadTranslations, setLocale };
