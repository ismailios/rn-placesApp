import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  ActivityIndicator
} from "react-native";
import Colors from "../constants/Colors";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const LocationPicker = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState();

  const verifyPermission = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);

    if (result.status !== "granted") {
      Alert.alert("Permissions !!", "To use this app u must accept ...", [
        { text: "okey" }
      ]);

      return false;
    }
    return true;
  };

  const getUserLocation = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }

    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000
      });

      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
    } catch (error) {
      Alert.alert("could not fetch location !", "please try again", [
        { text: "okay" }
      ]);
    }

    setIsFetching(false);
  };

  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        {isFetching ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text>No location chosen yet !!</Text>
        )}
      </View>
      <Button
        title="Get User Location"
        color={Colors.primary}
        onPress={getUserLocation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: { alignItems: "center" },
  mapPreview: {
    width: "100%",
    height: 200,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CCC",
    borderWidth: 1
  }
});

export default LocationPicker;
