import { COLORS } from "@/constants/theme";
import FA6 from "@react-native-vector-icons/fontawesome6";
import Constants from "expo-constants";
import { router } from "expo-router";
import { useHeaderHeight } from "expo-router/build/react-navigation";
import { Pressable, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

interface HeaderProps {
  haveBackButton: boolean;
}

export default function Header({ haveBackButton }: HeaderProps) {
  const headerHeight = useHeaderHeight();

  return (
    <View
      style={{
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: moderateScale(20),
        height: headerHeight,
        justifyContent: "center",
      }}
    >
      {haveBackButton ? (
        <Pressable onPress={() => router.back()} hitSlop={20}>
          <FA6
            name="arrow-left"
            iconStyle="solid"
            color={COLORS.white}
            size={moderateScale(20)}
          />
        </Pressable>
      ) : undefined}
    </View>
  );
}
