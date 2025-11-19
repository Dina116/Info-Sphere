import { createStackNavigator } from '@react-navigation/stack';
import ScreenNames from '../ScreenNames';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';


const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;