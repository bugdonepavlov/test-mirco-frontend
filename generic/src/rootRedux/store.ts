import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import staticReducers from './rootReducer';

const logMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production',
});

export const makeStore = () => {
  const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
    reducer: combineReducers({
      ...staticReducers,
    }),
  });

  // @ts-ignore
  store.asyncReducers = {};

  // @ts-ignore
  store.injectReducer = (key: string, asyncReducer: any) => {
    // @ts-ignore
    store.asyncReducers[key] = asyncReducer;
    // @ts-ignore
    store.replaceReducer(
      combineReducers({
        ...staticReducers,
        // @ts-ignore
        ...store.asyncReducers,
      }),
    );
  };
  return store;
};

export const store = makeStore();

// @ts-ignore
window.__store = store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
