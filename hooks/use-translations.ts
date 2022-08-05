import I18nContext from 'context/i18n';
import { useContext } from 'react';

export default function useTranslations() {
  const t = useContext(I18nContext);
  return t! || {};
}
