import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";
import { insertPlace, fetchPlaces } from "../helpers/db";

export const addPlace = (title, imageUri) => {
  return async dispatch => {
    const fileName = imageUri.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: imageUri,
        to: newPath
      });

      const dbResult = await insertPlace(
        title,
        newPath,
        "dummy address",
        18.8,
        12.2
      );
      // console.log(dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData: { id: dbResult.insertId, title: title, imageUri: imageUri }
      });
    } catch (error) {
      throw error;
    }
  };
};

export const setPlaces = () => {
  return async dispatch => {
    try {
      const dbResult = await fetchPlaces();
      console.log(dbResult);

      dispatch({
        type: SET_PLACES,
        places: dbResult.rows._array
      });
    } catch (error) {
      throw error;
    }
  };
};
