import { Navigation } from 'react-native-navigation';

export default function SingleScreen() {
  return Navigation.startSingleScreenApp({
    portraitOnlyMode: true,
    screen: {
      screen:'home',
      title: 'Home',
      label: 'Home'
    },
    animationType: 'fade',
    navBarHidden: true,
    appStyle: {
      // navBarBackgroundColor: '#172619',
      // orientation: 'portrait',
      // screenBackgroundColor: 'transparent',
      navBarHidden: true
    }
  });
}
