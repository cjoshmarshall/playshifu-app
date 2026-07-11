import Button from "@/components/button";
import { COLORS } from "@/constants/theme";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import {
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

import Screen4Button1Png from "@/assets/images/screen4-button1.png";
import Screen4Button2Png from "@/assets/images/screen4-button2.png";
import { useState } from "react";

const LOVABIES = [
  { id: 1, image: Screen4Button1Png },
  { id: 2, image: Screen4Button2Png },
];

export default function SelectPlushScreen() {
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();

  const [currentLovaby, setCurrentLovaby] = useState(1);

  const isLandscape = width > height;

  return (
    <ScrollView
      showsVerticalScrollIndicator={isLandscape}
      contentContainerStyle={{
        flex: isLandscape ? 0 : 1,
        marginHorizontal: moderateScale(26),
        paddingBottom: moderateScale(48),
        justifyContent: "space-between",
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
        {t("text.selectYourLovabies.title")}
      </Text>
      <Text
        style={{
          fontFamily: "Poppins_Regular",
          fontSize: moderateScale(18),
          color: COLORS.white,
        }}
      >
        {t("text.pickPlushYouWant.title")}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: isLandscape ? "row" : "column",
          flexWrap: isLandscape ? "wrap" : undefined,
          justifyContent: "space-evenly",
          marginVertical: moderateScale(24),
          gap: moderateScale(24),
        }}
      >
        {LOVABIES.map((item) => (
          <Pressable
            key={item.id}
            style={{
              flex: isLandscape ? 1 : 0,
              outlineWidth: currentLovaby === item.id ? moderateScale(4) : 0,
              borderRadius: 20,
              outlineColor: COLORS.white,
              height: moderateScale(190),
            }}
            onPress={() => setCurrentLovaby(item.id)}
          >
            <Image
              source={item.image}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 12,
              }}
              contentFit="fill"
            />
          </Pressable>
        ))}
      </View>
      <Button.Link
        variant="secondary"
        href={"/parental-lock"}
        textStyle={{
          fontFamily: "CherryBombOne_Regular",
          fontSize: moderateScale(24),
        }}
      >
        {t("button.next.title")}
      </Button.Link>
    </ScrollView>
  );
}
