import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

export const login = createAsyncThunk('LOGIN', async (userinfo) => {
  const response = await fetch('https://rails-uccq.onrender.com/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(userinfo),
  });
  const navigate = useNavigate();
  const user = await response.json();
  if (response.ok) {
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/vehicles');
  }
  return user;
});

const loginSlice = createSlice({
  name: 'user',
  initialState: [],
  extraReducers: {
    [login.fulfilled]: (state, action) => action.payload,
  },
});

export default loginSlice.reducer;
