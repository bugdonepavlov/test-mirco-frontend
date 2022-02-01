import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createUsersEffect } from 'rootRedux/features/users';
import { useAppDispatch } from 'rootRedux/hooks';
import { appReducers } from 'rootRedux/reducers';

const RemoteApp = () => {
  console.log('=====');
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(createUsersEffect()), 4000);
  }, []);

  return (
    <div style={{ backgroundColor: 'red' }}>
      <div>RemoteApp111</div>
      <div>HomeApp name from the redux store</div>
    </div>
  );
};

const RemoteAppWrapper = (props: any) => {
  const { store } = props;

  useEffect(() => {
    Object.keys(appReducers).forEach((key) => {
      // @ts-ignore
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
