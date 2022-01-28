import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createUsers } from 'rootRedux/features/users';
import { useAppDispatch } from 'rootRedux/hooks';
import { appReducers } from 'rootRedux/reducers';

const RemoteApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(createUsers()), 4000);
  }, []);

  return (
    <div>
      <div>RemoteApp</div>
      <div>HomeApp name from the redux store</div>
    </div>
  );
};

const RemoteAppWrapper = (props: any) => {
  const { store } = props;

  useEffect(() => {
    Object.keys(appReducers).forEach((key) => {
      store.injectReducer(key, appReducers[key]);
    });
  }, []);

  return (
    <Provider store={store || {}}>
      <RemoteApp />
    </Provider>
  );
};

export default RemoteAppWrapper;
