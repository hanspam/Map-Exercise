import React from "react";
import MapView, { Marker } from "react-native-maps";
export default function App({ position, markers }) {
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
      {markers.map((marker) => (
        <Marker
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