import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

//const baseUrl = 'https://rickandmortyapi.com/api';

const services = {
    getCharacter: (id) => axios.get(`${baseUrl}/character/${id}`),
    getLocation: (id) => axios.get(`${baseUrl}/location/${id}`),
    getEpisode: (id) => axios.get(`${baseUrl}/episode/${id}`),

    getAllCharacters: (query) =>
        axios.get(`${baseUrl}/character/${query ? query : ''}`),
    getCharactersByName: (name) =>
        axios.get(`${baseUrl}/character/?name=${name}`),
    getCharactersById: (idList) => axios.get(`${baseUrl}/character/${idList}`),

    getAllLocations: (query) =>
        axios.get(`${baseUrl}/location/${query ? query : ''}`),
    getAllEpisodes: (query) =>
        axios.get(`${baseUrl}/episode/${query ? query : ''}`),
    getLocationsByName: (query) =>
        axios.get(`${baseUrl}/location/?name=${query}`),
    getEpisodesByName: (query) =>
        axios.get(`${baseUrl}/episode/?name=${query}`),
};

export default services;
