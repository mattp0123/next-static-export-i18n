import { createContext } from 'react';
import { Translations } from 'types';

const I18nContext = createContext<Translations | null>(null);

export default I18nContext;
