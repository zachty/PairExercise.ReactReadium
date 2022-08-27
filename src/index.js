import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components';

import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('app'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
