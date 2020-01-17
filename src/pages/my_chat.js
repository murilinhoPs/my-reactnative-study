import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { StreamChat } from "stream-chat";
import { Chat, Channel, MessageList, MessageInput } from "stream-chat-expo";

import NavBar from "../components/navigation_bar";

const ChannelScreen = ({ navigation }) => {
  const chatClient = new StreamChat("f8wwud5et5jd");

  const userToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicmVzdGxlc3MtbW91c2UtMCJ9.lZ5PCi3P3J5qbWK-iZLsGsIdV81P6EqusyKozwmcuQw";

  const user = {
    //chatClient.setUser({id, name, image}) (async await)
    id: "restless-mouse-0",
    name: "Restless mouse",
    image:
      "https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg"
  };
  chatClient.setUser(user, userToken);
  const channel = chatClient.channel("messaging", "restless-mouse-0");
  channel.watch();
  return (
    <Chat client={chatClient}>
      <Channel channel={channel}>
        <View style={styles.container}>
          <MessageList />
          <MessageInput />
          <NavBar navigation={navigation} />
        </View>
      </Channel>
    </Chat>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  }
});

export default ChannelScreen;
