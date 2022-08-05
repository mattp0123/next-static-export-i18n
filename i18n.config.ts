import { Translations } from 'types';

const i18nConfig = {
  supportedLocales: ['en', 'zh-TW'],
  defaultLocale: 'en',
  localeMappings: {
    zh_TW: ['zh-tw', 'zh-hk', 'zh'],
  },
  imports: {
    en: () => require('locales/en.json'),
    'zh-TW': () => require('locales/zh_TW.json'),
  } as Record<string, () => Translations>,
};

export default i18nConfig;
