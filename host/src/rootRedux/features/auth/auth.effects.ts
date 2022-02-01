import { AppThunk } from 'rootRedux/store';
import {
  tryAuthLoginFailled,
  tryAuthLoginRequest,
  tryAuthLoginSuccess,
  tryAuthSignUpFailled,
  tryAuthSignUpRequest,
  tryAuthSignUpSuccess,
} from './auth.slice';

export const logoutLogin = (): AppThunk => async (dispatch) => {};

export const authLogin =
  (params: any): AppThunk =>
  async (dispatch) => {
    dispatch(tryAuthLoginRequest());

    try {
      dispatch(tryAuthLoginSuccess('todo'));
    } catch (error) {
      dispatch(tryAuthLoginFailled(''));
      throw error;
    }
  };

export const authSignUp =
  (params: any): AppThunk =>
  async (dispatch) => {
    dispatch(tryAuthSignUpRequest());

    try {
      dispatch(tryAuthSignUpSuccess('todo'));
    } catch (error) {
      dispatch(tryAuthSignUpFailled(''));
      throw error;
    }
  };
