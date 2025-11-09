import { Ionicons } from '@expo/vector-icons';

/** Stacks */
import PlaysStack from './PlaysStack';
import AuthorStack from './AuthorStack';
import FavoritesStack from './FavoriteStack';

/** Tab */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

/** Main Tab */
const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'PlaysStack':
              iconName = focused ? 'receipt' : 'receipt-outline';
              break;
            case 'FavoritesStack':
              iconName = focused ? 'star' : 'star-outline';
              break;
            case 'AuthorStack':
              iconName = focused ? 'people' : 'people-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name="PlaysStack"
        component={PlaysStack}
        options={{ title: 'Plays' }}
      />
      <Tab.Screen
        name="AuthorStack"
        component={AuthorStack}
        options={{ title: 'Authors' }}
      />
      <Tab.Screen
        name="FavoritesStack"
        component={FavoritesStack}
        options={{ title: 'Favorites' }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
