import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const BRAND = {
  bg: "#070A12",
  panel: "#0C1222",
  panel2: "#0A1020",
  stroke: "rgba(255,255,255,0.10)",
  text: "#EAF0FF",
  muted: "rgba(234,240,255,0.72)",
  muted2: "rgba(234,240,255,0.56)",
  primary: "#6D5EF6",
  primary2: "#58D7FF",
  success: "#40D39C",
  yel: "#ffaa00",
};

function PrimaryButton({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.primaryBtn, pressed && { opacity: 0.9 }]}
    >
      <Text style={styles.primaryBtnText}>{label}</Text>
      <Ionicons name="arrow-forward" size={18} color={BRAND.text} />
    </Pressable>
  );
}

// Removed secondary button and other content for a minimal first page.

// Removed feature cards and steps for a simple landing.

// —

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.centerRoot}>
      <Image
        source={require("../assets/images/logoidea.png")}
        style={styles.logo}
        contentFit="contain"
      />
      <Text style={styles.brandTitle}>IdeaSpark</Text>
      <View style={{ height: 16 }} />
      <PrimaryButton
        label="Get started"
        onPress={() => router.push("/auth/login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centerRoot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BRAND.bg,
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 28,
    marginBottom: 10,
  },
  brandTitle: {
    color: BRAND.yel,
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: 0.4,
    marginTop: 2,
    marginBottom: 100,
  },
  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: BRAND.primary,
  },
  primaryBtnText: {
    color: BRAND.text,
    fontSize: 14,
    fontWeight: "700",
  },
});
