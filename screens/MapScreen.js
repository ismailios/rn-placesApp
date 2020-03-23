import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Colors from "../constants/Colors";

const MapScreen = props => {
  const [selectedLocation, setSelectedLocation] = useState();

  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0992,
    longitudeDelta: 0.0421
  };

  const selectedHandler = event => {
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

  const saveEventHandler = useCallback(() => {
    if (!selectedLocation) {
      return;
    }
    props.navigation.navigate("NewPlace", { pickedLocation: selectedLocation });
  }, [selectedLocation]);

  useEffect(() => {
    props.navigation.setParams({
      savFn: saveEventHandler
    });
  }, [saveEventHandler]);

  return (
    <MapView style={styles.map} region={mapRegion} onPress={selectedHandler}>
      <Marker title="Picked Location" coordinate={markerCoordinates} />
    </MapView>
  );
};

MapScreen.navigationOptions = navData => {
  const savFn = navData.navigation.getParam("savFn");
  return {
    headerTitle: "Map",
    headerRight: (
      <TouchableOpacity style={styles.headerWrapper} onPress={savFn}>
        <Text style={styles.headerText}>Save</Text>
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  headerWrapper: {
    marginHorizontal: 16
  },
  headerText: {
    fontSize: 18,
    color: Platform.OS === "android" ? Colors.primary : null
  }
});

export default MapScreen;
