import { configureStore, combineReducers } from '@reduxjs/toolkit';

import vehicleSlice from './vehicles/vehicles';
import reservationsSlice from './reservations/reservations';
import loginSlice from './auth/login';

const reducer = combineReducers({
  user: loginSlice,
  vehicles: vehicleSlice,
  reservations: reservationsSlice,
});
const store = configureStore({ reducer });
export default store;
