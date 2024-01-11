import LogoTitle from '../components/LogoTile';

/** Screens */
import PlaysOverview from '../screens/PlaysOverview';
import PlayDetailScreen from '../screens/PlayDetailScreen';

/** Stack */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

/** Plays Stack */
const PlaysStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Plays"
        component={PlaysOverview}
        options={{
          headerTitle: () => <LogoTitle title="Play List" />,
        }}
      />
      <Stack.Screen
        name="PlayDetail"
        component={PlayDetailScreen}
        options={{ title: 'Play Detail' }}
      />
    </Stack.Navigator>
  );
};

export default PlaysStack;
