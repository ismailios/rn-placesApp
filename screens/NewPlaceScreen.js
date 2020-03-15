import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

const NewPlaceScreen = () => {
  const [textValue, setTextValue] = useState("");

  const textChangeHandler = text => {
    setTextValue(text);
  };

  const saveTextHandler = () => {};

  return (
    <ScrollView>
      <View style={styles.form}>
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
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: "#333",
    borderBottomWidth: 1
  }
});

export default NewPlaceScreen;
