import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import UsuarioMap from "./UsuarioMap";
//import DeliveryMap from "./DeliveryMap";


export default function App() {
  const [position, setPosition] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [position1, setPosition1] = useState(null);
  const [markers1, setMarkers1] = useState([]);
  const getPosition = async () => {
    try {
      const { coords } = await Location.getCurrentPositionAsync({});
      setPosition(coords);
      setMarkers([
        {
          latitude: coords.latitude,
          longitude: coords.longitude,
          message: "Estás aquí",
        },
      ]);
  } catch (error) {
      console.log("getPosition -> error", error);
      setPosition(null);
    }
  };
  const entryPoint = async () => {
    try {
      const { status } = await Location.requestPermissionsAsync();
      if (status === "granted") {
        getPosition();
      }
    } catch (error) {
      console.log("getPermissionAndPosition -> error", error);
    }
  };





  





  useEffect(() => {
    entryPoint();
    
  }, []);
  return (
    <View style={styles.container}>
      {(position && (
        <View
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <UsuarioMap position={position} markers={markers} />
          
        </View>
      )) || (
        <View>
          <Text>GPS No está disponible </Text>
        </View>
      )}
       
      <StatusBar style="auto" />
    </View>
  );
      
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
