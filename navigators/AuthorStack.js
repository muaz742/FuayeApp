import LogoTitle from '../components/LogoTile';

/** Screens */
import AuthorScreen from '../screens/AuthorScreen';
import PlaysOverview from '../screens/PlaysOverview';
import AuthorDetailScreen from '../screens/AuthorDetailScreen';

/** Stack */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

/** Author Stack */
const AuthorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthorsScreen"
        component={AuthorScreen}
        options={{
          headerTitle: () => <LogoTitle title="Author List" />,
        }}
      />
      <Stack.Screen
        name="AuthorDetail"
        component={AuthorDetailScreen}
        options={{ title: 'Author Detail' }}
      />
      <Stack.Screen
        name="Plays"
        component={PlaysOverview}
        options={{ title: "Author's Plays" }}
      />
    </Stack.Navigator>
  );
};

export default AuthorStack;
