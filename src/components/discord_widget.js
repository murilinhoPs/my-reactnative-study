import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

import NavBar from "./navigation_bar";

const DiscordApp = ({ navigation }) => {
  const SCRIPT = `
    const meta = document.createElement('meta');
    meta.setAttribute('content', 'width=100, initial-scale=.9, maximum-scale=.9, user-scalable=0, scrolling=no');
    meta.setAttribute('name', 'viewport');
    document.head.appendChild(meta);
    `;

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webViewContainer2}
        containerStyle={styles.webViewContainer2}
        injectedJavaScript={SCRIPT}
        originWhitelist={["*"]}
        textZoom={"200%"}
        scrollEnabled="true"
        source={{
          html: `<iframe 
                     src='https://discordapp.com/widget?id=432580928234324008&theme=dark' 
                     scrolling:'false' 
                     width='33%'
                      height='100%' 
                     frameBorder='0'  
                     allowtransparency='true'  
                     allowFullScreen='false'></iframe>`
        }}
      ></WebView>
      <NavBar navigation={navigation} />
    </View>
  );
};
//html: "<iframe src='https://discordapp.com/widget?id=432580928234324008&theme=dark' width='400' height='700' position='unset'></iframe>"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 2
  },
  webViewContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
    //aspectRatio: 2.6
  },
  webViewContainer2: {
    flex: 1,
    // width: 800,
    //height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,

    aspectRatio: 1.8
  }
});

export default DiscordApp;
