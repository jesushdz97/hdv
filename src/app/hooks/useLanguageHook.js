import { useLanguageState } from '../context/provider';
import languageEnum from '../reducers/actions/languageActions';

export default function useLanguageHook() {
  const languageState = useLanguageState();
  const isSpanish = languageState === languageEnum.spanish;
  return { isSpanish };
}
