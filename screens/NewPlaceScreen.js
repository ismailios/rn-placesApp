import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NewPlaceScreen = () => {
  return (
    <View>
      <Text>NewPlaceScreen</Text>
    </View>
  );
};

NewPlaceScreen.navigationOptions = navData => {
  return {
    headerTitle: "Add New Place "
  };
};

const styles = StyleSheet.create({});

export default NewPlaceScreen;
