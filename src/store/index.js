import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import * as reducers from './modules';
import rootSaga from './sagas';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['session', 'location', 'product', 'biometry', 'tooltip', 'account'],
  timeout: 0,
};

const combinedReducers = combineReducers(reducers);
const rootReducer = (state, action) => {
  const reducedState = combinedReducers(state, action);
  return reducedState;
};

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(persistReducer(persistConfig, rootReducer), enhancer);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
