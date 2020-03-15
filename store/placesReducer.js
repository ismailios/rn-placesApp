import { ADD_PLACE } from "./placesActions";
import Place from "../models/place";

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(new Date().toString(), action.placeDate.title);
      return {
        places: [...state.places, newPlace]
      };

    default:
      return state;
  }
};
