import { Navigation } from 'react-native-navigation';
import Home from './Home';

export function registerScreens(store: {}, Provider: {})  {
    Navigation.registerComponent('home', () => Home);
}