import Screen3BearPng from "@/assets/images/screen3-bear.png";
import Screen3BgPng from "@/assets/images/screen3-bg.jpg";
import Screen3UnicornPng from "@/assets/images/screen3-unicorn.png";
import Button from "@/components/button";
import { COLORS } from "@/constants/theme";
import { Image, ImageBackground } from "expo-image";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

export default function WelcomeScreen() {
  const { width, height } = useWindowDimensions();

  const isLandscape = width > height;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: isLandscape ? "row" : "column",
      }}
    >
      <WelcomeScreenContent isLandscape={isLandscape} />
    </ScrollView>
  );
}

function WelcomeScreenContent({ isLandscape }: { isLandscape: boolean }) {
  const { t } = useTranslation();

  return (
    <>
      <View style={{ flex: isLandscape ? 1 : 0 }}>
        <ImageBackground
          source={Screen3BgPng}
          style={{
            position: "relative",
            height: isLandscape ? "100%" : moderateScale(360),
            width: "100%",
          }}
        >
          <Image
            source={Screen3UnicornPng}
            style={{
              position: "absolute",
              top: "10%",
              right: isLandscape ? "10%" : "15%",
              height: moderateScale(240),
              width: "100%",
            }}
            contentFit="contain"
          />
          <Image
            source={Screen3BearPng}
            style={{
              position: "absolute",
              top: "20%",
              left: "10%",
              height: moderateScale(320),
              width: "100%",
            }}
            contentFit="contain"
          />
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: moderateScale(12),
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginBottom: moderateScale(20),
            fontFamily: "CherryBombOne_Regular",
            fontSize: moderateScale(34),
            color: COLORS.white,
          }}
        >
          {t("text.welcome.title")}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins_Regular",
            fontSize: moderateScale(18),
            color: COLORS.white,
          }}
        >
          {t("text.storiesSongsAdventuresAwait.title")}
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginBottom: moderateScale(32),
            fontFamily: "Poppins_Regular",
            fontSize: moderateScale(18),
            color: COLORS.white,
          }}
        >
          {t("text.doYouHaveLovabies.title")}
        </Text>

        <View style={{ paddingHorizontal: moderateScale(20) }}>
          <Button.Link
            href={"/benefits"}
            style={{
              marginBottom: moderateScale(32),
            }}
          >
            {t("button.yesIHaveToy.title")}
          </Button.Link>
          <Button.Link variant="secondary" href={"/select-plush"}>
            {t("button.noIDontHaveOne.title")}
          </Button.Link>
        </View>
      </View>
    </>
  );
}
