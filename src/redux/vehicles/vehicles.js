import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GETVEHICLE = 'GET_VEHICLE';

export const getVehicles = createAsyncThunk(
  GETVEHICLE,
  async () => {
    const vehicleList = [];
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await fetch('http://localhost:3000/api/v1/vehicles', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        Authorization: user.token,
      },
    });
    const initValues = await response.json();
    console.log(initValues);
    initValues.forEach((elem) => {
      console.log('element', elem);
      vehicleList.push({
        id: elem.id,
        name: elem.name,
        description: elem.description,
        image: elem.image,
        price_per_day: elem.price_per_day,
        color: elem.color,
      });
    });
    return (vehicleList);
  },
);

export const testVehicles = createAsyncThunk(
  'TEST_VEHICLES',
  async () => {
    console.log('testVehicles');
  });
export const addVehicle = createAsyncThunk(
  'ADD_VEHICLE',
  async (vehicleInfo) => {
    console.log('vehicleInfo');
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await fetch('http://localhost:3000/api/v1/vehicles', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        Authorization: user.token,
      },
      body: JSON.stringify(vehicleInfo),
    });
    console.log(response);
    const vehicle = await response.json();
    console.log(vehicle);
    return vehicle;
  }
);


const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState: [],
  extraReducers: {
    [getVehicles.fulfilled]: (state, action) => action.payload,
  },
});
export default vehicleSlice.reducer;
