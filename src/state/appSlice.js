import { createSlice } from '@reduxjs/toolkit';
import UiState from '../utils/UiState';
import { Categories } from '../utils/Categories';

const slice = createSlice({
    name: 'appData',

    initialState: {
        category: Categories.character,
        uiState: UiState.None,
        totalRecords: 41, //safe ammount
        charactersList: [],
        locationsList: [],
        episodesList: [],
        character: {},
        episode: {},
        location: {},
    },

    reducers: {
        changeCategory(state, action) {
            state.category = action.payload;
        },
        changeTotalRecords(state, action) {
            state.totalRecords = action.payload;
        },
        loadCharacters(state, action) {
            state.charactersList = action.payload;
            state.uiState = UiState.Ready;
        },
        loadLocations(state, action) {
            state.locationsList = action.payload;
            state.uiState = UiState.Ready;
        },
        loadEpisodes(state, action) {
            state.episodesList = action.payload;
            state.uiState = UiState.Ready;
        },
        loadSingleCharacter(state, action) {
            state.character = action.payload;
            state.uiState = UiState.Ready;
        },
        loadSingleLocation(state, action) {
            state.location = action.payload;
            state.uiState = UiState.Ready;
        },
        loadSingleEpisode(state, action) {
            state.episode = action.payload;
            state.uiState = UiState.Ready;
        },
        showErrorLoading(state) {
            state.uiState = UiState.ErrorLoading;
        },
        showErrorSearch(state) {
            state.uiState = UiState.ErrorNotFound;
        },
        //for sagas
        requestCharacters(state) {
            state.uiState = UiState.Loading;
        },
        requestCharacterSearch(state) {
            state.uiState = UiState.Loading;
        },
        requestLocations(state) {
            state.uiState = UiState.Loading;
        },

        requestLocationSearch(state) {
            state.uiState = UiState.Loading;
        },
        requestEpisodes(state) {
            state.uiState = UiState.Loading;
        },
        requestEpisodeSearch(state) {
            state.uiState = UiState.Loading;
        },
        requestSingleCharacter(state) {
            state.uiState = UiState.Loading;
        },
        requestSingleLocation(state) {
            state.uiState = UiState.Loading;
        },
        requestSingleEpisode(state) {
            state.uiState = UiState.Loading;
        },
    },
});

export const appReducer = slice.reducer;

export const {
    changeCategory,
    changeTotalRecords,
    loadCharacters,
    loadLocations,
    loadEpisodes,
    loadSingleCharacter,
    loadSingleLocation,
    loadSingleEpisode,
    requestCharacters,
    requestCharacterSearch,
    requestLocationSearch,
    requestEpisodeSearch,
    requestLocations,
    requestEpisodes,
    requestSingleCharacter,
    requestSingleLocation,
    requestSingleEpisode,
    showErrorLoading,
    showErrorSearch,
} = slice.actions;

export const selectCategory = (state) => state.appData.category;

export const selectUiState = (state) => state.appData.uiState;

export const selectCharactersList = (state) => state.appData.charactersList;
export const selectTotalRecords = (state) => state.appData.totalRecords;
export const selectLocationsList = (state) => state.appData.locationsList;
export const selectEpisodesList = (state) => state.appData.episodesList;
export const selectCharacter = (state) => state.appData.character;
export const selectEpisode = (state) => state.appData.episode;
export const selectLocation = (state) => state.appData.location;
