import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MapScreen = () => {
  return (
    <View>
      <Text>MapScreen</Text>
    </View>
  );
};

MapScreen.navigationOptions = navData => {
  return {
    headerTitle: "Places List "
  };
};

const styles = StyleSheet.create({});

export default MapScreen;
