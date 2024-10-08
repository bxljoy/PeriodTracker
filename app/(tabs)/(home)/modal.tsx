import { View, Platform } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Modal() {
  const isPresented = router.canGoBack();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {!isPresented && <Link href="../">Dismiss</Link>}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
