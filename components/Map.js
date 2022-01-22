import { View, Text } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, {Marker} from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';


const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)

    useEffect(() => {
        if(!origin || !destination) return

        // Adjust zoom to show markers
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: {top:50, bottom: 50, left: 50, right: 50}
        })
    }, [origin, destination]);
    

  return (
      <MapView
        ref={mapRef}
        style={tw`flex-1`}
        mapType='mutedStandard'
        initialRegion={{
            latitude: origin?.location.lat || 37.78825,
            longitude: origin?.location.lat || -122.4324,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
    >
        {origin && destination && (
            <MapViewDirections 
                origin={origin.description}
                destination={destination.description}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor='black'
            />
        )}
        {/* {origin?.location &&( */}
        {(
            <Marker 
                coordinate={{
                    latitude: origin?.location.lat || 37.78825,
                    longitude: origin?.location.lat || -122.4324,
                }}
                title='Origin'
                description={origin?.description || 'This is a static origin'}
                identifier='origin'
            />
        )}
        {/* {destination?.location &&( */}
        {(
            <Marker 
                coordinate={{
                    latitude: destination?.location.lat || 37.78825,
                    longitude: destination?.location.lat || -122.4324,
                }}
                title='Destination'
                description={destination?.description || 'This is a static destination'}
                identifier='destination'
            />
        )}
        </MapView>
  );
};

export default Map;
