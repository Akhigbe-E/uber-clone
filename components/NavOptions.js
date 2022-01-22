import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import {Icon, Left} from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';

const data = [
    {
        id:"123",
        title:"Get a Ride",
        image:"https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id:"120",
        title:"Order Food",
        image:"https://links.papareact.com/28w",
        screen: "EatsScreen"
    },
];

const NavOptions = () => {
    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-lg`}
                // disabled={!origin}
            >
                <View style={tw`${origin && 'opacity-20'}`}>
                    <Image 
                        style={{width:120, height:120, resizeMode:"contain"}}
                        source={{
                            uri: item.image
                        }} 
                    />
                    <Text style={tw`mt-2 text-base font-semibold`}>{item.title}</Text>
                    <Icon type="antdesign" name="arrowright" color="white" style={tw`w-10 p-2 mt-4 bg-black rounded-full`} />
                </View>
            </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;
