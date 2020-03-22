import React, { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState();

  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0992,
    longitudeDelta: 0.0421
  };

  const selectedHandler = event => {
    console.log(event);
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    });
  };

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    };
  }

  return (
    <MapView style={styles.map} region={mapRegion} onPress={selectedHandler}>
      <Marker title="Picked Location" coordinate={markerCoordinates} />
    </MapView>
  );
};

MapScreen.navigationOptions = navData => {
  return {
    headerTitle: "Map"
  };
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default MapScreen;
