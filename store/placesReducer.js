import { ADD_PLACE, SET_PLACES } from "./placesActions";
import Place from "../models/place";

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        places: action.places.map(
          pl => new Place(pl.id.toString(), pl.title, pl.imageUri)
        )
      };

    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id,
        action.placeData.title,
        action.placeData.imageUri
      );
      return {
        places: [...state.places, newPlace]
      };

    default:
      return state;
  }
};
