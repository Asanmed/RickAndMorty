import { call, put, takeLatest } from 'redux-saga/effects';

import services from '../services/apiServices';

import {
    loadCharacters,
    loadLocations,
    loadEpisodes,
    loadSingleCharacter,
    loadSingleLocation,
    loadSingleEpisode,
    requestCharacters,
    requestLocations,
    requestEpisodes,
    requestSingleCharacter,
    requestCharacterSearch,
    requestLocationSearch,
    requestEpisodeSearch,
    requestSingleLocation,
    requestSingleEpisode,
    showErrorLoading,
    showErrorSearch,
} from './appSlice';

function* fetchCharacters(action) {
    try {
        const res = action.payload
            ? yield call(services.getCharactersById, action.payload)
            : yield call(services.getAllCharacters);
        yield put(loadCharacters(res.data));
    } catch (error) {
        yield put(showErrorSearch());
    }
}

function* fetchCharaterSearch(action) {
    try {
        const res = yield call(services.getCharactersByName, action.payload);
        yield put(loadCharacters(res.data.results));
    } catch (error) {
        yield put(showErrorSearch());
    }
}

function* fetchLocations(action) {
    try {
        const res = yield call(services.getAllLocations, action.payload);
        yield put(loadLocations(res.data.results));
    } catch (error) {
        yield put(showErrorSearch());
    }
}

function* fetchLocationSearch(action) {
    try {
        const res = yield call(services.getLocationsByName, action.payload);
        yield put(loadLocations(res.data.results));
    } catch (error) {
        yield put(showErrorSearch());
    }
}

function* fetchEpisodes(action) {
    try {
        const res = yield call(services.getAllEpisodes, action.payload);
        yield put(loadEpisodes(res.data.results));
    } catch (error) {
        yield put(showErrorSearch());
    }
}

function* fetchEpisodeSearch(action) {
    try {
        const res = yield call(services.getEpisodesByName, action.payload);
        yield put(loadEpisodes(res.data.results));
    } catch (error) {
        yield put(showErrorSearch());
    }
}

function* fetchSingleCharacter(action) {
    try {
        const res = yield call(services.getCharacter, action.payload);
        yield put(loadSingleCharacter(res.data));
    } catch (error) {
        yield put(showErrorLoading());
    }
}

function* fetchSingleLocation(action) {
    try {
        const res = yield call(services.getLocation, action.payload);
        yield put(loadSingleLocation(res.data));
    } catch (error) {
        yield put(showErrorLoading());
    }
}

function* fetchSingleEpisode(action) {
    try {
        const res = yield call(services.getEpisode, action.payload);
        yield put(loadSingleEpisode(res.data));
    } catch (error) {
        yield put(showErrorLoading());
    }
}

export const sagas = [
    takeLatest(requestCharacters.type, fetchCharacters),
    takeLatest(requestCharacterSearch.type, fetchCharaterSearch),
    takeLatest(requestLocations.type, fetchLocations),
    takeLatest(requestLocationSearch.type, fetchLocationSearch),
    takeLatest(requestEpisodes.type, fetchEpisodes),
    takeLatest(requestEpisodeSearch.type, fetchEpisodeSearch),
    takeLatest(requestSingleCharacter.type, fetchSingleCharacter),
    takeLatest(requestSingleLocation.type, fetchSingleLocation),
    takeLatest(requestSingleEpisode.type, fetchSingleEpisode),
];
