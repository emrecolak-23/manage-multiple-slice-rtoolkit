import { createSlice, nanoid } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'car',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumption:
      // action.payload === {name: 'ab', cost: 1500}
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      // Assumption:
      // action.payload === the id of the car
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });

      state.data = updated;
    },
  },
});

export const { addCar, removeCar, changeSearchTerm } = carSlice.actions;

export const carSliceReducer = carSlice.reducer;
