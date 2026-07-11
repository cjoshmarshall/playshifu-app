import "intl-pluralrules";

import {
  FALLBACK_LANGUAGE,
  LOCALE_MESSAGES_EN,
  LOCALE_MESSAGES_PL,
  LOCALE_MESSAGES_RU,
} from "@/constants/language";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const deviceLng = getLocales()[0]?.languageCode;

const resources = {
  en: { translation: LOCALE_MESSAGES_EN },
  pl: { translation: LOCALE_MESSAGES_PL },
  ru: { translation: LOCALE_MESSAGES_RU },
};

const setLanguage = async () => {
  try {
    const storedLng = await AsyncStorage.getItem("language");
    if (!storedLng)
      await AsyncStorage.setItem("language", deviceLng ?? FALLBACK_LANGUAGE);
    const languageToUse = storedLng ?? deviceLng ?? FALLBACK_LANGUAGE;
    await AsyncStorage.setItem("language", languageToUse);
    await i18n.changeLanguage(languageToUse);
    console.log(`Language set to: ${languageToUse}`);
  } catch (error) {
    console.log("Error setting language:", error);
  }
};

void setLanguage();

void i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: FALLBACK_LANGUAGE,
  resources,
});

export default i18n;
