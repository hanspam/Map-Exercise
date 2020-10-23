import React from "react";
import MapView, { Marker } from "react-native-maps";


export default function UsuarioMap({ position, markers}) {
  return (
    
    <MapView
      initialRegion={{
        latitude: position.latitude,
        longitude: position.longitude,
        longitudeDelta: 0.09,
        latitudeDelta: 0.05,
      }}

     
     
      
      style={{
        width: "100%",
        height: "100%",
      }}
      minZoomLevel={11}
      
    >
      <MapView.Marker 
      coordinate={{
        latitude: 10.49581,
        longitude:  -66.85367}}
        title={"Delivery"}
        
        
        
     />

      {markers.map  ((marker, key)  => ( 
        <Marker
          key={key}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
            
          }}
         
          
          title={marker.message}
          
        />
        
      ))}
      

    </MapView>
    
  
    
    
  );
}

