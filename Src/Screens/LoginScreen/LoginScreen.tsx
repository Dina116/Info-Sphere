import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreenStyle from './LoginScreenStyle';
import { useNavigation } from '@react-navigation/native';
import StackNames from '../../navigation/Stacks/StackNames';

export default function LoginScreen() {

  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={LoginScreenStyle.container}>
        <Text
          style={LoginScreenStyle.welcomeText}
        >{`Welcome To InfoSphere`}</Text>
        <Text
          style={LoginScreenStyle.text}
        >{`Here\n You\n Can\n See\n The \nWorld`}</Text>
        <TouchableOpacity style={LoginScreenStyle.btn} onPress={()=>{
          navigate(StackNames.MainTabs)
        }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>Discover Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
