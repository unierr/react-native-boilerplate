import { Navigation } from "react-native-navigation";
import { registerScreens } from './screens';

registerScreens()

export default () => {
   return  Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
            root: {
                component: {
                    name: "home"
                }
            }
        });
    });
}