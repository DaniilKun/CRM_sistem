import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadState } from '../../storage';
import axios, { AxiosError } from 'axios';
import { API_URL } from '../../../api';

export const JWT_PERSISTENT_STATE = 'userData';

export interface IUserPersistenState {
  jwt: string | null;
}
export interface IUserState {
  jwt: string | null;
  loginErrorMessage?: string ;
  registerErrorMessage?: string ;
  username: string
}

const initialState: IUserState = {
  jwt: loadState<IUserPersistenState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
  username: ''
};

export const login = createAsyncThunk(
  'user/login',
  async (params: { email: string; password: string }) => {
    try {
      const { data } = await axios.post(`${API_URL}users/login`, {
        email: params.email,
        password: params.password,
      });
      return data
    } catch (error) {
      if( error instanceof AxiosError) {
        throw new Error(error.response?.data.detail)
      }
    }
  },
);
export const register = createAsyncThunk(
  'user/register',
  async (params: { email: string; password: string; username: string }) => {
    try {
      const { data } = await axios.post(`${API_URL}users/register_user`, {
        email: params.email,
        username: params.username,
        password: params.password,
      });
      return data
    } catch (error) {
      if( error instanceof AxiosError) {
        throw new Error(error.response?.data.detail)
      }
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearLoginError: (state) => {
      // state.email = action.payload.email;
      state.loginErrorMessage = undefined;
      // state.id = action.payload.id;
    },
    clearRegisterError: (state) => {
      state.registerErrorMessage = undefined;
    },
    removeUser: (state) => {
      // state.email = null;
      state.jwt = null;
      // state.id = null;
    },
    setUserName: (state,action) => {
      state.username = action.payload.username;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if(!action.payload){
        return
      }
      state.jwt = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loginErrorMessage = action.error.message;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      if(!action.payload){
        return
      }
      state.jwt = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.registerErrorMessage = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const {  removeUser,clearLoginError, clearRegisterError } = userSlice.actions;

export default userSlice.reducer;
