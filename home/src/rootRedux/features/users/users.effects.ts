import { tryCreateUserFailled, tryCreateUserRequest, tryCreateUserSuccess } from './users.slice';

export const createUsers = (): any => async (dispatch: any) => {
  dispatch(tryCreateUserRequest());

  try {
    dispatch(tryCreateUserSuccess({ id: Math.random().toString(16), title: 'User 2' }));
  } catch (error) {
    dispatch(tryCreateUserFailled(''));
    throw error;
  }
};
