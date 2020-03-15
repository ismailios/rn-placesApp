import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDtailsScreen = () => {
  return (
    <View>
      <Text>PlaceDtailsScreen</Text>
    </View>
  );
};

PlaceDtailsScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam("placeTitle")
  };
};

const styles = StyleSheet.create({});

export default PlaceDtailsScreen;
