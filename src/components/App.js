import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../store/reducers/index';
import SearchPage from './IMDB/SearchPage';
import Header from './UI/Header';
import SingleResult from './IMDB/SingleResult';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/singleResult/:id" component={SingleResult} />
          <Route path="/movieinfo" exact component={SearchPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
