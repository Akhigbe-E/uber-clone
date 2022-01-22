import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios"? "padding":"height"}
            // keyboardVerticalOffset={Platform.OS === "ios"? -100: 0}
            style={{flex:1}}
          >
          <SafeAreaProvider>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown: false}}/>
              </Stack.Navigator>
          </SafeAreaProvider>
          </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
