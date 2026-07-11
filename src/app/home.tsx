import Screen3BearPng from "@/assets/images/screen3-bear.png";
import Screen3BgPng from "@/assets/images/screen3-bg.jpg";
import Screen3UnicornPng from "@/assets/images/screen3-unicorn.png";
import Screen4Button2Png from "@/assets/images/screen4-button2.png";
import { COLORS } from "@/constants/theme";
import FA6 from "@react-native-vector-icons/fontawesome6";
import { BlurView } from "expo-blur";
import { Image, ImageBackground } from "expo-image";
import { useHeaderHeight } from "expo-router/build/react-navigation";
import { useTranslation } from "react-i18next";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

const DATA = Array.from({ length: 3 }, (_, index) => index + 1);

export default function HomeScreen() {
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();
  const headerHeight = useHeaderHeight();

  const isLandscape = width > height;
  const isCompact = width < 430;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flexDirection: "column" }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: moderateScale(48),
      }}
    >
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={Screen3BgPng}
          style={{
            position: "relative",
            height: moderateScale(320),
            width: "100%",
            paddingTop: headerHeight + 10,
          }}
        >
          <Text
            style={{
              paddingHorizontal: moderateScale(20),
              fontFamily: "Poppins_Medium",
              fontSize: moderateScale(28),
              color: COLORS.white,
            }}
          >
            Stores & songs {"\n"}your kids will {"\n"}
            <Text style={{ color: COLORS.pink }}>love, anywhere</Text>
          </Text>
          <Text
            style={{
              paddingHorizontal: moderateScale(24),
              fontFamily: "Poppins_Medium",
              fontSize: moderateScale(14),
              color: COLORS.purple[100],
            }}
          >
            Liste, learn & grow with{"\n"}huggable friends
          </Text>

          {isCompact ? null : (
            <>
              <Image
                source={Screen3UnicornPng}
                style={{
                  position: "absolute",
                  bottom: isLandscape ? "25%" : "10%",
                  left: "15%",
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
                  left: "25%",
                  height: moderateScale(260),
                  width: "100%",
                }}
                contentFit="contain"
              />
            </>
          )}
        </ImageBackground>
        <Tab isCompact={isCompact} />
        <Section />
      </View>
    </ScrollView>
  );
}

function Section() {
  return DATA.map((item) => (
    <View key={item} style={{ marginBottom: moderateScale(20) }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: moderateScale(20),
          marginBottom: moderateScale(20),
        }}
      >
        <Text
          style={{
            fontFamily: "CherryBombOne_Regular",
            fontSize: moderateScale(18),
            color: COLORS.white,
          }}
        >
          Section {item}
        </Text>
        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: moderateScale(6),
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_Medium",
              fontSize: moderateScale(16),
              color: COLORS.white,
            }}
          >
            See All
          </Text>
          <FA6
            name="chevron-right"
            size={moderateScale(14)}
            iconStyle="solid"
            color={COLORS.white}
          />
        </Pressable>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({ item, index }) => (
          <Pressable
            style={{
              flexDirection: "column",
              height: moderateScale(220),
              width: moderateScale(140),
              marginBottom: moderateScale(10),
              marginLeft: moderateScale(18),
              marginRight: DATA.length === index + 1 ? moderateScale(18) : 0,
              overflow: "hidden",
              borderRadius: 8,
              backgroundColor: COLORS.white,
            }}
          >
            <ImageBackground
              source={Screen4Button2Png}
              style={{ flex: 1, justifyContent: "flex-end" }}
            >
              <BlurView intensity={80} tint="dark">
                <Text
                  style={{
                    marginTop: moderateScale(6),
                    marginHorizontal: moderateScale(6),
                    fontFamily: "Poppins_Medium",
                    fontSize: moderateScale(14),
                    color: COLORS.white,
                  }}
                  numberOfLines={1}
                >
                  Title {item}
                </Text>
                <Text
                  style={{
                    marginTop: moderateScale(3),
                    marginHorizontal: moderateScale(6),
                    paddingBottom: moderateScale(6),
                    fontFamily: "Poppins_Medium",
                    fontSize: moderateScale(10),
                    color: COLORS.white,
                  }}
                  numberOfLines={2}
                >
                  description description description description description
                  description description description
                </Text>
              </BlurView>
            </ImageBackground>
          </Pressable>
        )}
      />
    </View>
  ));
}

const tabs = [
  {
    id: 1,
    title: "Stories",
    description: "Explore tales",
    icon: "book",
    iconColor: COLORS.pink,
  },
  {
    id: 2,
    title: "Songs",
    description: "Sing along",
    icon: "music",
    iconColor: COLORS.blue,
  },
  {
    id: 3,
    title: "Sleep",
    description: "Calm & relax",
    icon: "heart",
    iconColor: COLORS.lavender,
  },
  {
    id: 4,
    title: "Downloads",
    description: "Listen offline",
    icon: "download",
    iconColor: COLORS.green[100],
  },
];

function Tab({ isCompact }: { isCompact: boolean }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        marginHorizontal: moderateScale(10),
        marginVertical: moderateScale(24),
        backgroundColor: COLORS.purple[400],
        borderRadius: 24,
        justifyContent: "space-between",
        alignSelf: "center",
        maxWidth: 800,
      }}
    >
      {tabs.map((item) => (
        <View
          key={item.id}
          style={{
            flex: 1,
            marginVertical: moderateScale(10),
            paddingVertical: moderateScale(6),
            paddingHorizontal: moderateScale(16),
            flexDirection: isCompact ? "column" : "row",
            alignItems: "center",
            borderLeftWidth: 1,
            borderColor: COLORS.purple[300],
            gap: moderateScale(12),
          }}
        >
          <FA6
            name={item.icon as any}
            color={item.iconColor}
            size={moderateScale(32)}
            iconStyle="solid"
          />
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              minWidth: 0,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_Medium",
                fontSize: moderateScale(isCompact ? 10 : 12),
                color: COLORS.white,
                textAlign: isCompact ? "center" : "left",
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_Regular",
                fontSize: moderateScale(isCompact ? 8 : 10),
                color: COLORS.white,
                textAlign: isCompact ? "center" : "left",
              }}
            >
              {item.description}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
