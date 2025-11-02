import { Text, View, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background-image.png")}
        style={styles.background}
      >
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Image
            source={require("../assets/images/Logo.png")}
            style={styles.logo}
          />

          <Text style={styles.title}>Discover Your Dream Destination</Text>

          {/* ✅ Required text line */}
          <Text style={styles.textSmall}>The best prices for over 2 </Text>

          <Text style={styles.subtitle}>
            Book flights, hotels, and experiences with unbeatable offers.
          </Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => router.push("/search")}
          >
            <Text style={styles.btnText}>Start Exploring</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  textSmall: {
    fontSize: 14,
    color: "#ddd",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#eee",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: "#ff9800",
    paddingVertical: 12,
    pa

        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            
            {/* Company Logo */}
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            {/* Text Section */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2</Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            {/* Buttons + Navigation Prompt */}
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>

          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});
