import Screen3BearPng from "@/assets/images/screen3-bear.png";
import Screen3BgPng from "@/assets/images/screen3-bg.jpg";
import Screen3UnicornPng from "@/assets/images/screen3-unicorn.png";
import Button from "@/components/button";
import { COLORS } from "@/constants/theme";
import FA from "@react-native-vector-icons/fontawesome";
import FA6 from "@react-native-vector-icons/fontawesome6";
import { Image, ImageBackground } from "expo-image";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import {
  ScrollView,
  Text,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

const FEATURES = [
  {
    feature: "listenOnPhone",
    app: true,
    plush: true,
  },
  {
    feature: "basicStoriesRhymes",
    app: true,
    plush: true,
  },
  {
    feature: "hugListenAnywhere",
    app: false,
    plush: true,
  },
  {
    feature: "offlinePlayback",
    app: false,
    plush: true,
  },
  {
    feature: "physicalButtons",
    app: false,
    plush: true,
  },
  {
    feature: "accessToFullLibrary",
    app: false,
    plush: true,
  },
  {
    feature: "recordYourOwnVoice",
    app: false,
    plush: true,
  },
  {
    feature: "sleepTimer",
    app: false,
    plush: true,
  },
  {
    feature: "contentUpdates",
    app: false,
    plush: true,
  },
];

export default function BenefitsScreen() {
  const { width, height } = useWindowDimensions();

  const isLandscape = width > height;

  return isLandscape ? (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <BenefitsScreenContent isLandscape={isLandscape} />
    </View>
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, flexDirection: "column" }}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: moderateScale(48) }}
    >
      <BenefitsScreenContent isLandscape={isLandscape} />
    </ScrollView>
  );
}

function BenefitsScreenContent({ isLandscape }: { isLandscape: boolean }) {
  const { t } = useTranslation();
  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={Screen3BgPng}
          style={{
            position: "relative",
            height: isLandscape ? "100%" : moderateScale(320),
            width: "100%",
          }}
        >
          <Image
            source={Screen3UnicornPng}
            style={{
              position: "absolute",
              bottom: isLandscape ? "25%" : "10%",
              right: "15%",
              height: moderateScale(160),
              width: "100%",
            }}
            contentFit="contain"
          />
          <Image
            source={Screen3BearPng}
            style={{
              position: "absolute",
              top: "15%",
              left: "5%",
              height: moderateScale(260),
              width: "100%",
            }}
            contentFit="contain"
          />
        </ImageBackground>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={isLandscape}
        scrollEnabled={isLandscape}
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingTop: isLandscape ? moderateScale(24) : undefined,
          paddingBottom: isLandscape ? moderateScale(36) : undefined,
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: moderateScale(12),
            marginTop: isLandscape ? undefined : moderateScale(12),
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginBottom: moderateScale(16),
              fontFamily: "CherryBombOne_Regular",
              fontSize: moderateScale(34),
              lineHeight: moderateScale(36),
              color: COLORS.white,
            }}
          >
            {t("text.storiesThatHugBack.title")}
          </Text>
          <Text
            style={{
              textAlign: "center",
              marginBottom: moderateScale(16),
              fontFamily: "Poppins_Regular",
              fontSize: moderateScale(18),
              color: COLORS.white,
            }}
          >
            {t("text.everyStorySongNowInFriend.title")}
          </Text>
        </View>

        <ComparisonTable />

        <View style={{ paddingHorizontal: moderateScale(20) }}>
          <Button.Link
            href={"/parental-lock"}
            style={{ marginBottom: moderateScale(32) }}
          >
            {t("button.bringBuddyHome.title")}
          </Button.Link>
          <Button.Link variant="secondary" href={"/parental-lock"}>
            {t("button.maybeLaterKeepExploring.title")}
          </Button.Link>
        </View>
      </ScrollView>
    </>
  );
}

function ComparisonTable() {
  return (
    <View
      style={{
        marginHorizontal: moderateScale(32),
        marginBottom: moderateScale(32),
        paddingVertical: 4,
        borderRadius: 16,
        backgroundColor: COLORS.purple[300],
        borderWidth: 0,
        borderColor: COLORS.purple[150],
        boxShadow: "2px 8px 4px " + COLORS.purple[400],
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: COLORS.purple[150],
        }}
      >
        <View style={{ flex: 2, paddingHorizontal: moderateScale(14) }} />
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            paddingVertical: moderateScale(12),
            color: COLORS.white,
            fontFamily: "Poppins_SemiBold",
            fontSize: moderateScale(14),
          }}
        >
          {t("text.appOnly.title")}
        </Text>

        <Text
          style={{
            flex: 1,
            textAlign: "center",
            paddingVertical: moderateScale(12),
            borderLeftWidth: 1,
            borderLeftColor: COLORS.purple[150],
            color: COLORS.white,
            fontFamily: "Poppins_SemiBold",
            fontSize: moderateScale(14),
          }}
        >
          {t("text.appPlush.title")}
        </Text>
      </View>

      {FEATURES.map((item, index) => (
        <View
          key={item.feature}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: FEATURES.length === index + 1 ? 0 : 1,
            borderBottomColor: COLORS.purple[150],
          }}
        >
          <Text
            style={{
              flex: 2,
              textAlignVertical: "center",
              height: moderateScale(44),
              fontFamily: "Poppins_Medium",
              color: COLORS.white,
              fontSize: moderateScale(14),
              paddingHorizontal: moderateScale(14),
            }}
          >
            {t(`text.${item.feature}.title`)}
          </Text>
          <RenderIcon value={item.app} />
          <RenderIcon
            value={item.plush}
            style={{
              borderLeftWidth: 1,
              borderLeftColor: COLORS.purple[150],
            }}
          />
        </View>
      ))}
    </View>
  );
}

function RenderIcon({ value, style }: { value: boolean; style?: ViewStyle }) {
  return (
    <View
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "stretch",
        },
        style,
      ]}
    >
      <View
        style={{
          width: moderateScale(20),
          height: moderateScale(20),
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: value ? COLORS.green[200] : COLORS.red,
        }}
      >
        {value ? (
          <FA
            name="check"
            color={COLORS.purple[200]}
            size={moderateScale(12)}
          />
        ) : (
          <FA6
            name="xmark"
            iconStyle="solid"
            color={COLORS.white}
            size={moderateScale(12)}
          />
        )}
      </View>
    </View>
  );
}
