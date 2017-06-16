import axios from 'axios';

const initialState ={
    error: false,
    loading: false,
    search: false,
    pokemon: {results: []}
};

const SET_POKEMON = "SET_POKEMON";
const POKEMON_DETAILS = "POKEMON_DETAILS";

export default function pokemon( state = initialState, action ){
    console.log("running reducer", action);
    switch(action.type){
        case SET_POKEMON + "_PENDING":
            return{
                error: false,
                loading: true,
                search: false,
                pokemon: {results: []}
            }
        case SET_POKEMON + "_FULFILLED":
            return{
                error: false,
                loading: false,
                search: false,
                pokemon: action.payload
            }
        case SET_POKEMON + "_REJECTED":
            return {
                error: true,
                loading: false,
                search: false,
                pokemon: {results: []}
            }
        default: return state;
    }
}

export function setPokemon(){
    const promise = axios.get("http://pokeapi.co/api/v2/pokemon").then(response => response.data);
    return {
        type: SET_POKEMON,
        payload: promise
    }
}

export function pokemonDetails(url){
    const promise = axios.get(url).then(response => response.data);
    return {
        type: POKEMON_DETAILS,
        payload: promise
    }
}