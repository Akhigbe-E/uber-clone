import { View } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import Map from '../components/Map';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const HomeScreen = () => {
  const Stack = createNativeStackNavigator()
  return (
      <View style={{backgroundColor:"white"}}>
          <View style={{height:"60%"}}>
            <Map/>  
          </View> 
          <View style={{height: "40%"}}>
            <Stack.Navigator>
              <Stack.Screen
                name="NavigateCard"
                component={NavigateCard}
                options={{headerShown:false}}
              />
              <Stack.Screen
                name="RideOptionsCard"
                component={RideOptionsCard}
                options={{headerShown:false}}
              />
            </Stack.Navigator>
          </View> 
      </View>
  );
};

export default HomeScreen;
