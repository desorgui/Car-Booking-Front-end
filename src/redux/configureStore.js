import { configureStore, combineReducers } from '@reduxjs/toolkit';

import vehicleSlice from './vehicles/vehicles';
import reservationsSlice from './reservations/reservations';

const reducer = combineReducers({
  vehicles: vehicleSlice,
  reservations: reservationsSlice,
},
);
const store = configureStore({ reducer });
export default store;
