import * as SplashScreen from "expo-splash-screen";
import { useColorScheme, useWindowDimensions } from "react-native";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
// import { AnimatedSplashOverlay } from "@/components/animated-icon";
import Header from "@/components/header";
import { COLORS } from "@/constants/theme";
import "@/utils/i18n";
import { CherryBombOne_400Regular } from "@expo-google-fonts/cherry-bomb-one";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { width, height } = useWindowDimensions();

  const [loaded, error] = useFonts({
    Poppins_Regular: Poppins_400Regular,
    Poppins_Medium: Poppins_500Medium,
    Poppins_SemiBold: Poppins_600SemiBold,
    CherryBombOne_Regular: CherryBombOne_400Regular,
  });

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(COLORS.purple[200]);
  }, [colorScheme]);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  const isLandscape = width > height;

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerTitleStyle: {
            color: COLORS.white,
            fontFamily: "Poppins_Regular",
          },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: COLORS.purple[200] },
          headerStyle: { backgroundColor: COLORS.purple[200] },
          headerBackVisible: false,
          header: ({ options }) => (
            <Header haveBackButton={options.title !== "Screen 1"} />
          ),
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "Screen 1", headerTransparent: true }}
        />
        <Stack.Screen
          name="welcome"
          options={{
            title: "Screen 2",
            headerTransparent: isLandscape,
            headerStyle: { backgroundColor: "transparent" },
          }}
        />
        <Stack.Screen
          name="benefits"
          options={{
            title: "Screen 3",
            headerTransparent: true,
            headerStyle: { backgroundColor: "transparent" },
          }}
        />
        <Stack.Screen name="select-plush" options={{ title: "Screen 4" }} />
        <Stack.Screen name="parental-lock" options={{ title: "Screen 5" }} />
        <Stack.Screen
          name="home"
          options={{
            title: "Screen 6",
            headerTransparent: true,
          }}
        />
      </Stack>
    </>
  );
}
