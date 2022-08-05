import I18nContext from 'context/i18n';
import i18nConfig from 'i18n.config';
import { useMemo } from 'react';

interface Props {
  locale: string;
  children: React.ReactNode;
}

export default function I18nWrapper(props: Props) {
  const t = useMemo(() => i18nConfig.imports[props.locale](), [props.locale]);
  return (
    <I18nContext.Provider value={t}>{props.children}</I18nContext.Provider>
  );
}
