import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
      <SafeAreaView>
        <View style={tw`p-5`}>
            <Text>Hello Maps</Text>
        </View>
      </SafeAreaView>
  );
};

export default HomeScreen;
