import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenNames from '../ScreenNames';
import FavArticlesScreen from '../../Screens/FavArticlesScreen/FavArticlesScreen';
import Ionicons from '@react-native-vector-icons/ionicons';
import StackNames from '../Stacks/StackNames';
import HomeStack from '../Stacks/HomeStack';

const MyTabs = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <MyTabs.Navigator screenOptions={{ headerShown: false }}>
      <MyTabs.Screen
        name={StackNames.HomeStack}
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          tabBarActiveTintColor: 'brown',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <MyTabs.Screen
        name={ScreenNames.FavArticlesScreen}
        component={FavArticlesScreen}
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-circle" size={24} color={color} />
          ),
          tabBarActiveTintColor: 'brown',
          tabBarInactiveTintColor: 'gray',
        }}
      />
    </MyTabs.Navigator>
  );
}
