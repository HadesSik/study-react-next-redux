import '../styles/global.css'

// redux
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

const configureStore = (initialState, options) => {
  const middlewares = []; // 미들웨어
  const enhancer = process.env.NODE_ENV === 'production' ?
    compose(applyMiddleware(...middlewares)) :
    composeWithDevTools(
      applyMiddleware(...middlewares)
    );
  const store = createStore(reducer, initialState, enhancer);

  return store;
}

// @ts-ignore
export default withRedux(configureStore)(App);