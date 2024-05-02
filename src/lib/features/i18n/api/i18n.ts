import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('../model/en.json'));
register('ua', () => import('../model/ua.json'))

export const DEFAULT_LANG = 'en';

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});