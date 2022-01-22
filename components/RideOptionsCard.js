import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import NavigateCard from './NavigateCard';

const RideOptionsCard = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-grow rounded-tl-3xl rounded-tr-3xl`}>
      <View>
        <TouchableOpacity
        style={tw`absolute top-3 left-5 p-3 z-50`}
        onPress={() => navigation.navigate(NavigateCard)}>
          <Icon
          name="chevron-left"
          type="fontawesome"
          />
        </TouchableOpacity>
        <Text style={tw`text-left text-center p-5 text-lg font-semibold`}>Select a ride 🚕</Text>
      </View>
      {/* <FlatList data /> */}
    </SafeAreaView>
  );
};

export default RideOptionsCard;
