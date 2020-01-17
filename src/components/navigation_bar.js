import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import Routes from "../routes";

function NavBar({ navigation }) {
  return (
    <View style={styles.navigationContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Twitch");
        }}
        style={{
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10
        }}
      >
        <MaterialCommunityIcons size={45} name="twitch" color={"#000"} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Mixer");
        }}
        style={{
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10
        }}
      >
        <MaterialCommunityIcons size={45} name="mixer" color={"#000"} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DiscordChat");
        }}
        style={{
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10
        }}
      >
        <MaterialIcons size={30} name="chat" color={"#000"} />
        <MaterialCommunityIcons size={30} name="discord" color={"#000"} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DiscordWidget");
        }}
        style={{
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10
        }}
      >
        <MaterialCommunityIcons size={45} name="discord" color={"#000"} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Chat");
        }}
        style={{
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10
        }}
      >
        <MaterialIcons size={45} name="chat" color={"#000"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    backgroundColor: "#fff",
    elevation: 15,
    alignItems: "center",
    justifyContent: "center",
    flex: 0.12,
    flexDirection: "row",
    paddingBottom: 5
  }
});

export default NavBar;
