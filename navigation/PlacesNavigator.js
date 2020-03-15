import { createAppContainer, createStackNavigator } from "react-navigation";
import MapScreen from "../screens/MapScreen";
import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailsScreen from "../screens/PlaceDetailsScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

const PlacesNavigator = createStackNavigator(
  {
    PlacesList: PlacesListScreen,
    PlaceDetails: PlaceDetailsScreen,
    NewPlace: NewPlaceScreen,
    MapScreen: MapScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ""
      },
      headerTintColor: Platform.OS === "android" ? "" : Colors.primary
    }
  }
);

export default createAppContainer(PlacesNavigator);
