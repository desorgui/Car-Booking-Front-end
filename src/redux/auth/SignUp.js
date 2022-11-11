import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signUpUser = createAsyncThunk('SIGN_UP', async (userinfo) => {
  const response = await fetch('https://jeepbook.herokuapp.com/api/v1/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(userinfo),
  });
  console.log(response);
  const user = await response.json();
  console.log(user);
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