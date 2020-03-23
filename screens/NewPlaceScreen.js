import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import * as placesActions from "../store/placesActions";
import ImagePicker from "../components/ImagePicker";
import LocationPicker from "../components/LocationPicker";

const NewPlaceScreen = props => {
  const [textValue, setTextValue] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const dispatch = useDispatch();

  const textChangeHandler = text => {
    setTextValue(text);
  };

  const saveTextHandler = () => {
    dispatch(
      placesActions.addPlace(textValue, selectedImage, selectedLocation)
    );
    props.navigation.goBack();
  };

  const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath);
  };

  const onLocationPickedHandler = useCallback(
    location => {
      setSelectedLocation(location);
    },
    [location]
  );

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text>Title : </Text>
        <TextInput
          style={styles.inputStyle}
          value={textValue}
          onChangeText={textChangeHandler}
        />
        <ImagePicker onTakenImage={imageTakenHandler} />
        <LocationPicker
          navigation={props.navigation}
          onLocationPicked={onLocationPickedHandler}
        />
        <Button
          title="Add Place"
          color={Colors.primary}
          onPress={saveTextHandler}
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = navData => {
  return {
    headerTitle: "Add New Place "
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  inputStyle: {
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: "#333",
    borderBottomWidth: 1
  }
});

export default NewPlaceScreen;
