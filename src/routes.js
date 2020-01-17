import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MixerEmbed from "./components/mixer_widget";
import DiscordEmbed from "./components/discord_chat";
import DiscordApp from "./components/discord_widget";
import TwitchEmbed from "./components/twitch_chat";
import NavBar from "./components/navigation_bar";
import ChannelScreen from "./pages/my_chat";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Mixer: {
        screen: MixerEmbed,
        navigationOptions: {
          headerTitleAlign: "center"
        }
      },
      Chat: {
        screen: ChannelScreen,
        navigationOptions: {
          headerTitleAlign: "center"
        }
      },
      DiscordChat: {
        screen: DiscordEmbed,
        navigationOptions: {
          headerTitleAlign: "center"
        }
      },
      DiscordWidget: {
        screen: DiscordApp,
        navigationOptions: {
          headerTitleAlign: "center"
        }
      },
      Twitch: {
        screen: TwitchEmbed,
        navigationOptions: {
          headerTitleAlign: "center"
        }
      },
      ChooseRoute: {
        screen: NavBar,
        navigationOptions: {
          headerTitleAlign: "center"
        }
      }
    },
    {
      initialRouteName: "Twitch"
    }
  )
);

export default Routes;
