import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView ,{Marker, Polygon}from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import {locations} from '../Data/Data';

const Map = () => {
    const origin = useSelector(selectOrigin);
    return (
        <MapView
        style={tw `flex-1` }
        mapType={"mutedStandard"}
        initialRegion={{
          latitude: 51.5074,
          longitude: 0.1278,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
       
        }}
        >
            {/* {
                locations.map(marker =>(

                    <Polygon coordinates={locations}
                    strokeWidth={1}        // The width of the outline of the shape
        strokeColor='#4099FF'  // Color of the outline
        fillColor='rgba(...)'  // Shape color
                    />
                ) )
            }
     */}

                {
                    locations.map(marker => (
                        <Marker
                        coordinate={{latitude: marker.latitude,
                        longitude: marker.longitude}}
                        title={marker.title}
                        />
                    ))
                    
                } 
                        
   
        </MapView>

     

      
    )
}

export default Map

const styles = StyleSheet.create({})

