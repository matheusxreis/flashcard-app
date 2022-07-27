import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { pt_br, en_us, es_es} from "./resources/index.root"

const resources = {
    pt_br: {
      translation: pt_br
    },
    en_us: {
      translation: en_us
    },
    es_es: {
        translation: es_es
      }
  };


async function language() { return await AsyncStorage.getItem("@flashcardapp:language") || "pt_br"; }

setTimeout(async () =>{
  const fallbackLng = await language();

  i18n
  .use(initReactI18next)
  .init({
      resources,
      fallbackLng,
      debug:true, 
      interpolation: {
        escapeValue: false
      },
  
  });
})

export default i18n;