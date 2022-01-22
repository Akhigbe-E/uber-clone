import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import RideOptionsCard from './RideOptionsCard';
import NavFavourites from './NavFavourites';

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-1 rounded-tl-3xl rounded-tr-3xl`}>
      <Text style={tw`text-left p-5 text-lg font-semibold`}>Good Morning, Emmanuel 👋🏾</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete
              styles={toInputBoxStyles}
              fetchDetails
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "en"
              }}
              onPress={(data, details = null) => {
                  useDispatch(setDestination({
                    location: details.geometry.location,
                    description: data.description
                  }))
                navigation.navigate(RideOptionsCard)
              }}
              returnKeyType="search"
              minLength={2}
              enablePoweredByContainer={false}
              debounce={400}
              placeholder='Where To?'
              nearbyPlacesAPI='GooglePlacesSearch'
            />
            <NavFavourites />
            <TouchableOpacity onPress={() => navigation.navigate(RideOptionsCard)}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingTop: 20,
        flex: 0
      },
      textInput:{
        backgroundColor: "#DDDDDF",
        borderRadius: 9,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})