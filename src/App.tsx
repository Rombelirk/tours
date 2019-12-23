import React, { FC } from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import Offers from './modules/Offers/OffersContainer';
import Layout from './modules/Layout/LayoutContainer';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import './app.css';

const history = createBrowserHistory();

const App: FC = () => {
    return (
        <div>
            <Provider store={store}>
                <Router history={history}>
                    <Layout>
                        <Route path='/:searchString' component={Offers} />
                    </Layout>
                </Router>
            </Provider>
        </div>
    );
};

export default App;
