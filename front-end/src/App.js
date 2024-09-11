// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { publicRoutes, adminRoutes } from '~/routes';
import PrivateRoute from './components/PrivateRoute';
function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        route.isProtected ? (
                                            <PrivateRoute isProtected={route.isProtected}>
                                                {route.product ? <Page /> : <Page />}
                                            </PrivateRoute>
                                        ) : route.product ? (
                                            <Page />
                                        ) : (
                                            <Page />
                                        )
                                    }
                                />
                            );
                        })}

                        {adminRoutes.map((route, index) => {
                            const Page = route.component;

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <PrivateRoute isProtected={route.isProtected}>
                                            <Page />
                                        </PrivateRoute>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
