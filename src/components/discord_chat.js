import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

import NavBar from "./navigation_bar";

const DiscordEmbed = ({ navigation }) => {
  const SCRIPT = `
    const meta = document.createElement('meta');
    meta.setAttribute('content', 'width=200,height=500, initial-scale=1.1, maximum-scale=1.1, user-scalable=0, scrolling=no');
    meta.setAttribute('name', 'viewport');
    document.head.appendChild(meta);
    `;

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webViewContainer}
        containerStyle={styles.webViewContainer}
        injectedJavaScript={SCRIPT}
        originWhitelist={["*"]}
        textZoom={125}
        scrollEnabled="false"
        source={{
          html: `<body>
<div id="root" ></div>
<script src="https://unpkg.com/react@16/umd/react.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.min.js"></script>
<script src="https://trianons.com.br/trianons-anos-20/wp-content/themes/Avada-Child-Theme/discord_chat/static/js/2.91c70911.chunk.js"></script>
<script src="https://trianons.com.br/trianons-anos-20/wp-content/themes/Avada-Child-Theme/discord_chat/static/js/main.0310d580.chunk.js"></script>
<script src="https://trianons.com.br/trianons-anos-20/wp-content/themes/Avada-Child-Theme/discord_chat/static/js/runtime-main.75a7f358.js"></script>
</body>`
        }}
      ></WebView>
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column"
  },
  webViewContainer: {
    flex: 1,

    flexDirection: "column",
    marginTop: 2,
    justifyContent: "flex-start",
    marginLeft:-5
  }
});

export default DiscordEmbed;
