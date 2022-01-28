import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from 'pages/Users';
import { store as hostStore } from './rootRedux/store';
import { Provider } from 'react-redux';
import { store } from './rootRedux/store';

const RemoteApp = React.lazy(() => import('home/RemoteApp'));

const App = () => {
  // useEffect(() => {
  //   // Inject usersReducer inside host store if this microfrontend initializes inside the host app.
  //   // @ts-ignore
  //   if (usersStore) hostStore.injectReducer('users', usersReducer);
  // }, []);

  return (
    <Provider store={store}>
      <div>
        <h1>Bi-Directional</h1>
        <h2>App 1</h2>
        <React.Suspense fallback="Loading Button">
          <RemoteApp store={store} />
        </React.Suspense>

        <Routes>
          <Route path="/" element={<Users />} />
          {/* <Route path="dashboard" element={<Dashboard title="dashboard" />} /> */}
        </Routes>
        {/* <LocalButton /> */}
        {/* <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense> */}
      </div>
    </Provider>
  );
};

export default App;
