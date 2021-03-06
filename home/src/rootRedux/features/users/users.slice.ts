import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import { LoadingState } from 'generic/commonTypes';

console.log('====LoadingState', LoadingState.idle);

export interface InitialState {
  list: any[];
  loading: LoadingState;
  errors: string;
}

const initialState: InitialState = {
  list: [{ id: Math.random().toString(16), title: 'User 1' }],
  loading: LoadingState.idle,
  errors: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    tryLogout: () => initialState,

    tryCreateUserRequest: (state) => {
      state.loading = LoadingState.pending;
    },
    tryCreateUserSuccess: (state, { payload }: PayloadAction<any>) => {
      state.loading = LoadingState.fulfilled;
      state.list.push(payload);
    },
    tryCreateUserFailled: (state, { payload }: PayloadAction<string>) => {
      state.loading = LoadingState.failled;
    },
  },
});

export default usersSlice.reducer;

export const { tryCreateUserFailled, tryCreateUserSuccess, tryCreateUserRequest } = usersSlice.actions;

export const usersSelector = (state: { users: InitialState }) => state.users;
