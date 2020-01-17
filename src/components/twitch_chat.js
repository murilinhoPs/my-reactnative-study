import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";

import NavBar from "./navigation_bar";

const TwitchEmbed = ({ navigation }) => {
  const SCRIPT = `
    const meta = document.createElement('meta');
    meta.setAttribute('content', ' height=500, initial-scale=1.25, maximum-scale=2.0, user-scalable=0, scrolling=no');
    meta.setAttribute('name', 'viewport');
    document.head.appendChild(meta);
    `;

  return (
    <View style={styles.container}>
      <WebView
        containerStyle={styles.webViewContainer}
        textZoom={80}
        injectedJavaScript={SCRIPT}
        originWhitelist={["*"]}
        scrollEnabled="false"
        source={{
          html: `  
          <iframe frameborder="0"
        scrolling="no"
        id="chat_embed"
        src="https://www.twitch.tv/embed/dropandoideias/chat"
        height="100%"
        width="25%">
</iframe>`
        }}
        style={styles.frame}
      />

      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  frame: {
    flex: 1,
    marginRight: -200,
    marginLeft: -10,
    alignItems: "flex-end"
  },
  webViewContainer: {
    flex: 1,
    justifyContent: "center",
    aspectRatio: 2.05
  }
});

export default TwitchEmbed;
