import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signUpUser = createAsyncThunk('SIGN_UP', async (userinfo) => {
  const response = await fetch('https://rails-uccq.onrender.com/api/v1/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(userinfo),
  });
  const user = await response.json();
  return user;
});

const signUpSlice = createSlice({
  name: 'signUp',
  initialState: [],
  extraReducers: {
    [signUpUser.fulfilled]: (state, action) => action.payload,
  },
});

export default signUpSlice.reducer;
