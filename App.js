import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';

export default function App() {


  return (
    <View style={styles.container}>
     <MapView style={styles.map}
              provider={PROVIDER_GOOGLE}
              region={{
                      latitude:10.48801,
                      longitude:-66.87919,
                      latitudeDelta: 0.1,
                      longitudeDelta: 0.1,
              }}>
      <MapView.Marker
              coordinate={{
                latitude:10.48801,
                longitude:-66.87919,
              }}
              title={'My marker title'}
              description={'My Marker descriptions'}/>



     </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0, 
    bottom: 0,
    right: 0,
  }
});
