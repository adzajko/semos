import { PLANTS } from '../../services/plants';

const ACTION_TYPES = {
  SET_PLANTS: 'SET_PLANTS',
  ADD_PLANT: 'ADD_PLANT',
  EDIT_PLANT: 'EDIT_PLANT',
  DELETE_PLANT: 'DELETE_PLANT',
};

const initialState = {
  plants: PLANTS,
};

const plantState = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_PLANTS: {
      return { ...state, plants: action.payload };
    }
    case ACTION_TYPES.ADD_PLANT: {
      return { ...state, plants: [...state.plants, action.payload] };
    }
    case ACTION_TYPES.EDIT_PLANT: {
      return {
        ...state,
        plants: state.plants.map((plant) => {
          if (plant.id === action.payload.id) {
            return action.payload;
          }
          return plant;
        }),
      };
    }
    case ACTION_TYPES.DELETE_PLANT: {
      return {
        ...state,
        plants: state.plants.filter((plant) => plant.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};

export const setNewPlants = (plants) => {
  return { type: ACTION_TYPES.SET_PLANTS, payload: plants };
};

export const addPlant = (plant) => {
  return { type: ACTION_TYPES.ADD_PLANT, payload: plant };
};

export const editPlant = (plant) => {
  return { type: ACTION_TYPES.EDIT_PLANT, payload: plant };
};

export const deletePlant = (plant) => {
  return { type: ACTION_TYPES.DELETE_PLANT, payload: plant };
};

export const selectPlants = (state) => state.plantState.plants;

export default plantState;
