import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Inter_900Black } from "@expo-google-fonts/inter";
import { Caveat_400Regular, Caveat_700Bold } from "@expo-google-fonts/caveat";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Bungee_400Regular } from "@expo-google-fonts/bungee";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loaded, error] = useFonts({
  //   "BungeeTint-Regular": require("../assets/fonts/BungeeTint-Regular.ttf"),
  // });
  const [loaded, error] = useFonts({
    Inter_900Black,
    Caveat_700Bold,
    Caveat_400Regular,
    Bungee_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
