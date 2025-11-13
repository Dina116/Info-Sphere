import { StyleSheet } from 'react-native';

const LoginScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'brown',
    fontStyle: 'italic',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'brown',
  },
  btn: {
    backgroundColor: '#e48686ff',
    borderRadius: 10,
    padding: 15,
    margin: 20,
  },
});

export default LoginScreenStyle;
