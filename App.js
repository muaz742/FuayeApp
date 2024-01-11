/** React Navigation */
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './navigators/MainTab';

/** Redux */
import { Provider } from 'react-redux';
import store from './store';

/** Main Component */
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </Provider>
  );
}
