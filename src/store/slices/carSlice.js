import { createSlice, nanoid } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'car',
  initialState: {
    searchTerm: '',
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload.searchTerm;
    },
    addCar(state, action) {
      // Assumption:
      // action.payload === {name: 'ab', cost: 1500}
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      // Assumption:
      // action.payload === the id of the car
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload;
      });

      state.cars = updated;
    },
  },
});

export const { addCar, removeCar, changeSearchTerm } = carSlice.actions;

export const carSliceReducer = carSlice.reducer;
