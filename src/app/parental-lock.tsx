import Button from "@/components/button";
import Input from "@/components/input";
import { COLORS } from "@/constants/theme";
import { router } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, ScrollView, Text } from "react-native";
import { moderateScale } from "react-native-size-matters";

const PARENTAL_LOCK_ANSWER = "30";

export default function ParentalLockScreen() {
  const { t } = useTranslation();

  const [answer, setAnswer] = useState("");

  const handlePress = () => {
    if (answer === PARENTAL_LOCK_ANSWER) router.push("/home");
    else Alert.alert("Please enter correct answer");
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        marginHorizontal: moderateScale(26),
        paddingBottom: moderateScale(32),
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
        {t("text.parentalLock.title")}
      </Text>
      <Text
        style={{
          fontFamily: "Poppins_Regular",
          fontSize: moderateScale(18),
          color: COLORS.white,
        }}
      >
        {t("text.solveTheEquation.title")}
      </Text>

      <Text
        style={{
          marginVertical: moderateScale(32),
          marginHorizontal: moderateScale(20),
          fontFamily: "CherryBombOne_Regular",
          fontSize: moderateScale(42),
          color: COLORS.yellow,
        }}
      >
        6*(1+4)
      </Text>
      <Input
        containerStyle={{ height: moderateScale(140) }}
        multiline
        keyboardType="number-pad"
        onChangeText={(e) => setAnswer(e)}
      />
      <Button
        style={{ marginTop: moderateScale(48) }}
        textStyle={{ fontFamily: "CherryBombOne_Regular" }}
        onPress={handlePress}
      >
        {t("button.next.title")}
      </Button>
    </ScrollView>
  );
}
