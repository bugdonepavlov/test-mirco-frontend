import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from 'types/common';

export interface InitialState {
  token: null | string;
  loading: string;
  errors: string;
}

const initialState: InitialState = {
  token: null,
  loading: LoadingState.idle,
  errors: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    tryLogout: () => initialState,

    tryAuthLoginRequest: (state) => {
      state.loading = LoadingState.pending;
    },
    tryAuthLoginSuccess: (state, { payload }: PayloadAction<string>) => {
      state.loading = LoadingState.fulfilled;
      state.token = payload;
    },
    tryAuthLoginFailled: (state, { payload }: PayloadAction<string>) => {
      state.loading = LoadingState.failled;
      state.token = payload;
    },

    tryAuthSignUpRequest: (state) => {
      state.loading = LoadingState.pending;
    },
    tryAuthSignUpSuccess: (state, { payload }: PayloadAction<string>) => {
      state.loading = LoadingState.fulfilled;
      state.token = payload;
    },
    tryAuthSignUpFailled: (state, { payload }: PayloadAction<string>) => {
      state.loading = LoadingState.failled;
      state.token = payload;
    },
  },
});

export default authSlice.reducer;

export const {
  tryAuthLoginFailled,
  tryAuthLoginSuccess,
  tryAuthLoginRequest,

  tryAuthSignUpRequest,
  tryAuthSignUpSuccess,
  tryAuthSignUpFailled,

  tryLogout,
} = authSlice.actions;

export const authSelector = (state: { auth: InitialState }) => state.auth;
