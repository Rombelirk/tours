import React, { FC } from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import Offers from './modules/Offers/OffersContainer';
import Details from './modules/Details/DetailsContainer'
import Layout from './modules/Layout/LayoutContainer';
import { Router, Switch, Route, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import "./app.css";

const history = createBrowserHistory()

const App: FC = () => {
    return (
        <div>
            <Provider store={store}>
                <Router history={history}>
                    <Layout>
                        <Switch>
                            <Route path="/offers" component={Offers} />
                            <Route path="/details/:id" component={Details} />
                            <Redirect to="/offers" />
                        </Switch>
                    </Layout>
                </Router>
            </Provider>
        </div>
    );
};

export default App;
