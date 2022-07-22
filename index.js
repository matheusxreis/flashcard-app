import { registerRootComponent } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

export default function Main() {
    return (
        <PaperProvider>
            <App />
        </PaperProvider>
    )
}
registerRootComponent(App);
