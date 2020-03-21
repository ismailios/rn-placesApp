import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";
import { insertPlace } from "../helpers/db";

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
      console.log(dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData: { id: dbResult.insertId, title: title, imageUri: imageUri }
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
