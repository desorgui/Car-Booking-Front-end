import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GETVEHICLE = 'GET_VEHICLE';

export const getVehicles = createAsyncThunk(
  GETVEHICLE,
  async () => {
    const vehicleList = [];
    const response = await fetch('vehiclesData.json');
    const initValues = await response.json();
    initValues.forEach((elem) => {
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

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState: [],
  extraReducers: {
    [getVehicles.fulfilled]: (state, action) => action.payload,
  },
});
export default vehicleSlice.reducer;
