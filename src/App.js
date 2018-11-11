import { Navigation } from "react-native-navigation";
import { registerScreens } from './screens';
import { configureStore, sagaMiddleware } from './store'; // Import Store & SagaMiddleware from './store/index.js'
import rootSaga from './sagas'; // Import Sagas from './sagas/index.js'

const store = configureStore();

sagaMiddleware.run(rootSaga);

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