import { createStackNavigator } from '@react-navigation/stack';
import ScreenNames from '../ScreenNames';
import ArticleDetailsScreen from '../../Screens/ArticleDetailsScreen/ArticleDetailsScreen';

const Stack = createStackNavigator();

const SharedStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.ArticleDetailsScreen} component={ArticleDetailsScreen} />
    </Stack.Navigator>
  );
};

export default SharedStack;