import { configureStore } from '@reduxjs/toolkit';

import {
  changeSearchTerm,
  addCar,
  removeCar,
  carSliceReducer,
} from './slices/carSlice';

import { changeCost, changeName, formSliceReducer } from './slices/formSlice';

const store = configureStore({
  reducer: {
    cars: carSliceReducer,
    form: formSliceReducer,
  },
});

export { store };

export { changeSearchTerm, addCar, removeCar, changeCost, changeName };
