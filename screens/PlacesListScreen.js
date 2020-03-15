import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import PlaceItem from "../components/PlaceItem";
const PlacesListScreen = props => {
  const places = useSelector(state => state.places.places);

  return (
    <View>
      <FlatList
        data={places}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <PlaceItem
            image={itemData.item.imageUri}
            title={itemData.item.title}
            address={null}
            onSelect={() =>
              props.navigation.navigate("PlaceDetails", {
                placeTitle: itemData.item.title,
                placeId: itemData.item.id
              })
            }
          />
        )}
      />
    </View>
  );
};

PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: "Places List ",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
