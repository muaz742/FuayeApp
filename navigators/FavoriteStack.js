import LogoTitle from '../components/LogoTile';

/** Screens */
import FavoriteScreen from '../screens/FavoritesScreen';
import AuthorDetailScreen from '../screens/AuthorDetailScreen';
import PlayDetailScreen from '../screens/PlayDetailScreen';

/** Stack */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

/** Favorite Stack */
const FavoriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          headerTitle: () => <LogoTitle title="Favorites" />,
        }}
      />
      <Stack.Screen
        name="AuthorDetail"
        component={AuthorDetailScreen}
        options={{ title: 'Author Detail' }}
      />
      <Stack.Screen
        name="PlayDetail"
        component={PlayDetailScreen}
        options={{ title: 'Play Detail' }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteStack;
