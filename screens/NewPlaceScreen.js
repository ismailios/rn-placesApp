import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import * as placesActions from "../store/placesActions";

const NewPlaceScreen = props => {
  const [textValue, setTextValue] = useState("");
  const dispatch = useDispatch();

  const textChangeHandler = text => {
    setTextValue(text);
  };

  const saveTextHandler = () => {
    dispatch(placesActions.addPlace(textValue));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text>Title : </Text>
        <TextInput
          style={styles.inputStyle}
          value={textValue}
          onChangeText={textChangeHandler}
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
