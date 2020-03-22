import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
const MapScreen = () => {
  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0992,
    longitudeDelta: 0.0421
  };
  return <MapView style={styles.map} region={mapRegion} />;
};

MapScreen.navigationOptions = navData => {
  return {
    headerTitle: "Map  "
  };
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default MapScreen;
