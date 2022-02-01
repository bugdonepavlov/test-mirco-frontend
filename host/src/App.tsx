import React from 'react';
import { Provider } from 'react-redux';
import { store } from './rootRedux/store';

const RemoteApp = React.lazy(() => import('remote/RemoteApp'));

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Bi-Directional</h1>
        <h2>App 122</h2>

        <React.Suspense fallback="Loading Button">
          <RemoteApp store={store} />
        </React.Suspense>
      </div>
    </Provider>
  );
};

export default App;
