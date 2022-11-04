import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const getUrl = 'https://api.spacexdata.com/v3/reservations';

const FETCHED_RESERVATION = 'FETCHED_RESERVATION';

export const getReservations = createAsyncThunk(
  FETCHED_RESERVATION,
  async () => {
    const reservationArr = [];
    const response = await fetch('reservationsData.json');
    const initValues = await response.json();
    initValues.forEach((reservation) => {
        const {} = reservation
        reservationArr.push({
          id: reservation.id,
          user_id: reservation.user_id,
          vehicle_id: reservation.vehicle_id,
          city: reservation.city,
          reservation_date: reservation.reservation_date,
          return_date: reservation.return_date,
          status: reservation.status,
        });
      });
    return (reservationArr);
  },
);


const reservationSlice = createSlice({
  name: 'reservations',
  initialState: [],
  extraReducers: {
    [getReservations.fulfilled]: (state, action) => action.payload,
  },
});

export default reservationSlice.reducer;
