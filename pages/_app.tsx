import type { AppProps } from 'next/app';

// import I18nWrapper from 'components/i18n-wrapper';
import dynamic from 'next/dynamic';

const I18nWrapper = dynamic(() => import('components/i18n-wrapper'))

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const { locale = 'en' } = router.query as { locale?: string };
  return (
    <I18nWrapper locale={locale}>
      <Component {...pageProps} />
    </I18nWrapper>
  );
}
