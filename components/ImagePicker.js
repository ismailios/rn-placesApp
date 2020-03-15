import React from "react";
import { View, StyleSheet, Button, Text, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Colors from "../constants/Colors";

const ImgPicker = () => {
  const verifyPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA_ROLL,
      Permissions.CAMERA
    );

    if (result.status !== "granted") {
      Alert.alert("Permissions !!", "To use this app u must accept ...", [
        { text: "okey" }
      ]);

      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    ImagePicker.launchCameraAsync();
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        <Text>No Image picked Yet ...</Text>
        <Image style={styles.image} />
      </View>
      <Button
        title="Take Image"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: { alignItems: "center" },
  imagePreview: {
    width: "100%",
    height: 300,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CCC",
    borderWidth: 1
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default ImgPicker;
