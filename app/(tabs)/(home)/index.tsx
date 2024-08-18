import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tab[Home]</Text>
      <Link
        href={{
          pathname: "/details/[id]",
          params: { id: "bacon" },
        }}
        style={styles.link}
      >
        View user details
      </Link>
      <Link href="/modal">Present modal</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  link: {
    color: "blue",
    borderWidth: 4,
    padding: 10,
    borderRadius: 10,
    borderColor: "blue",
  },
});
