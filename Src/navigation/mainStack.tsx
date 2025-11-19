import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StackNames from './Stacks/StackNames';
import AuthStack from './Stacks/AuthStack';
import MainTabs from './Tabs/MainTabs';
import SharedStack from './Stacks/SharedStack';

const stack = createStackNavigator<MainStackParamList>();
export default function MainStack() {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name={StackNames.AuthStack} component={AuthStack} />
      <stack.Screen name={StackNames.MainTabs} component={MainTabs} />
      <stack.Screen name={StackNames.SharedStack} component={SharedStack}/>
    </stack.Navigator>
  );
}
export type MainStackParamList = {
  [StackNames.AuthStack]: undefined;
  [StackNames.MainTabs]: undefined;
};
