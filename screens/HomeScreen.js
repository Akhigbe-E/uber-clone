import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, selectOrigin, setOrigin } from "../slices/navSlice";
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch()
  return (
      <SafeAreaView style={{backgroundColor:"white", flex: 1}}>
        <View style={tw`p-5 bg-white flex-1`}>
            <Image 
              style={{width:100, height:100, resizeMode:"contain"}}
                source={{
                    uri: "https://links.papareact.com/gzs"
                }} 
            />
            <GooglePlacesAutocomplete
              styles={{
                container:{
                  flex:0,
                },
                textInput:{
                  fontSize: 18
                }
              }}
              fetchDetails
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "en"
              }}
              onPress={(data, details = null) => {
                  dispatch(setOrigin({
                    location: details.geometry.location,
                    description: data.description
                  }))
                dispatch(setDestination(null))
              }}
              returnKeyType="search"
              minLength={2}
              enablePoweredByContainer={false}
              placeholder='Where From?'
              nearbyPlacesAPI='GooglePlacesSearch'

            />
            <NavOptions />
            <NavFavourites />
        </View>
      </SafeAreaView>
  );
};

export default HomeScreen;
