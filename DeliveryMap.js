import React from "react";
import MapView, { Marker } from "react-native-maps";

export default function DeliveryMap({ position1, markers1 }) {
  return (
    <MapView
      initialRegion={{
        latitude: position1.latitude,
        longitude: position1.longitude,
        longitudeDelta: 0.09,
        latitudeDelta: 0.05,
      }}
      
      style={{
        width: "100%",
        height: "100%",
      }}
      minZoomLevel={11}
    >
      {markers1.map((marker, key) => ( 
        <Marker
          key={key}
          coordinate={{
            
            latitude: position1.latitude,
            longitude: position1.longitude,
            
            color:"blue"
          }}
          

          title={marker.message}
          
        />
        
      ))}
      
    </MapView>
    
    
  );
}