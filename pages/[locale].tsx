import useTranslations from 'hooks/use-translations';
import i18nConfig from 'i18n.config';
import type { GetStaticPaths, GetStaticProps } from 'next/types';
import { styled } from 'stitches.config';

const Text = styled('div', {
  color: '#333',
});

export default function Page() {
  const t = useTranslations();
  return <Text>{t.foo}</Text>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: i18nConfig.supportedLocales.map((locale) => ({
      params: { locale },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale = 'en' } = context.params as { locale?: string };
  return { props: {} };
};
