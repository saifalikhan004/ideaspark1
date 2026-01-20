import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const BRAND = {
  bg: "#070A12",
  panel: "#0C1222",
  text: "#EAF0FF",
  muted: "rgba(234,240,255,0.6)",
  primary: "#6D5EF6",
  stroke: "rgba(255,255,255,0.1)",
};

export default function Login() {
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.root}>
      <View style={styles.centerContent}>
        <Image
          source={require("../../assets/images/logoidea.png")}
          style={styles.logo}
          contentFit="contain"
        />
        <Text style={styles.title}>Welcome to IdeaSpark</Text>
        <Text style={styles.subtitle}>Login to continue building ideas ✨</Text>
      </View>

      {/* Mobile Input */}
      <View style={styles.inputBox}>
        <Ionicons name="call-outline" size={18} color={BRAND.muted} />
        <TextInput
          placeholder="Enter mobile number"
          placeholderTextColor={BRAND.muted}
          keyboardType="phone-pad"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* OTP Button */}
      <Pressable style={styles.primaryBtn}>
        <Text style={styles.primaryText}>Send OTP</Text>
      </Pressable>

      {/* Divider */}
      <Text style={styles.or}>OR</Text>

      {/* Google Auth */}
      <Pressable style={styles.socialBtn}>
        <Ionicons name="logo-google" size={18} color="#fff" />
        <Text style={styles.socialText}>Continue with Google</Text>
      </Pressable>

      {/* Guest */}
      <Pressable style={styles.guestBtn}>
        <Text style={styles.guestText}>Continue as Guest</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BRAND.bg,
    padding: 24,
    justifyContent: "center",
  },
  centerContent: {
    alignItems: "center",
    transform: [{ translateX: 0 }],
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 28,
    marginBottom: 10,
  },
  title: {
    color: BRAND.text,
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
  subtitle: {
    color: BRAND.muted,
    textAlign: "center",
    marginBottom: 30,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: BRAND.stroke,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
  },
  input: {
    color: BRAND.text,
    marginLeft: 8,
    flex: 1,
  },
  primaryBtn: {
    backgroundColor: BRAND.primary,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  primaryText: {
    color: "#fff",
    fontWeight: "700",
  },
  or: {
    color: BRAND.muted,
    textAlign: "center",
    marginVertical: 20,
  },
  socialBtn: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: BRAND.stroke,
    height: 48,
    borderRadius: 12,
  },
  socialText: {
    color: BRAND.text,
  },
  guestBtn: {
    marginTop: 16,
    alignItems: "center",
  },
  guestText: {
    color: BRAND.muted,
    textDecorationLine: "underline",
  },
});
