import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { appReducer } from './appSlice';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        appData: appReducer,
    },
    middleware: [sagaMiddleware],
});

function* rootSaga() {
    yield all([...sagas]);
}

sagaMiddleware.run(rootSaga);
