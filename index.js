import { registerRootComponent } from 'expo';

import App from './App';

// o index está importando o app.js 

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
