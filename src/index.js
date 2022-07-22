import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {HashRouter, Routes, Route} from 'react-router-dom';
import {store, persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                    </Routes>
                </HashRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

