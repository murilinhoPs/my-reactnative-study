import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";

import NavBar from "./navigation_bar";

const MixerEmbed = ({ navigation }) => {
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
          <iframe src="https://mixer.com/embed/player/mixer" 
          width="25%" 
          height="150%" 
          scrolling:'no' 
          frameborder="0" 
          allowtransparency="true" 
          allowfullscreen="true"
          allow="encrypted-media">
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
    marginRight: -220,
    marginLeft: -15,
    alignItems: "flex-end"
  },
  webViewContainer: {
    flex: 1,
    justifyContent: "center",
    aspectRatio: 2.05
  }
});

export default MixerEmbed;
