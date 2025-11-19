import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Src/navigation/mainStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
