import { createStackNavigator } from '@react-navigation/stack';
import ScreenNames from '../ScreenNames';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
