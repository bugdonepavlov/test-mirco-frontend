/* eslint-disable no-useless-catch */
// todo

export const login = async (params: any) => {
  try {
    return { token: Math.random().toString(16) };
  } catch (err) {
    throw err;
  }
};

export const signUp = async (params: any) => {
  return { token: Math.random().toString(16) };
};
