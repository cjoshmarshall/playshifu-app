import { ScrollView, Text, useWindowDimensions, View } from "react-native";

import Button from "@/components/button";
import { FALLBACK_LANGUAGE, LANGUAGES } from "@/constants/language";
import { COLORS } from "@/constants/theme";
import i18n from "@/utils/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CONSTANTS from "expo-constants";
import { useTranslation } from "react-i18next";
import { moderateScale } from "react-native-size-matters";

export default function HomeScreen() {
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();

  const isLandscape = width > height;

  const handleLanguage = async <T,>(code: T) => {
    let languageToUse =
      LANGUAGES.find((item) => item.code === code)?.code ?? FALLBACK_LANGUAGE;
    await AsyncStorage.setItem("language", languageToUse);
    await i18n.changeLanguage(languageToUse);
    console.log(`Language reset to: ${languageToUse}`);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={isLandscape}
      contentContainerStyle={{
        marginHorizontal: moderateScale(26),
        paddingTop: CONSTANTS.statusBarHeight,
        paddingBottom: moderateScale(48),
      }}
    >
      <Text
        style={{
          marginBottom: moderateScale(16),
          fontFamily: "CherryBombOne_Regular",
          fontSize: moderateScale(34),
          color: COLORS.white,
        }}
      >
        {t("text.selectALanguage.title")}
      </Text>
      <Text
        style={{
          marginBottom: moderateScale(48),
          fontFamily: "Poppins_Regular",
          fontSize: moderateScale(18),
          color: COLORS.white,
        }}
      >
        {t("text.changeLaterInSettings.title")}
      </Text>
      <View
        style={{
          flexDirection: isLandscape ? "row" : "column",
          flexWrap: isLandscape ? "wrap" : undefined,
          justifyContent: "space-between",
        }}
      >
        {LANGUAGES.map((item) => (
          <Button.Radio
            key={item.id}
            intialValue={item.code}
            selectedValue={i18n.language}
            onPress={() => handleLanguage(item.code)}
            style={{
              marginBottom: moderateScale(42),
              width: isLandscape ? "48%" : "100%",
            }}
          >
            {t(`language.${item.language}.title`)}
          </Button.Radio>
        ))}
      </View>
      <Button.Link
        href={"/welcome"}
        textStyle={{
          fontFamily: "CherryBombOne_Regular",
          fontSize: moderateScale(24),
        }}
      >
        {t("button.confirm.title")}
      </Button.Link>
    </ScrollView>
  );
}
