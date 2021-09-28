import axios from 'axios';

export const GetPokemons = (page)=>async dispatch =>{
    try{
        dispatch({
            type:"GET_POKEMON_REQUEST"
        })

        const perPage = 10;
        const offset = (page * perPage) - perPage;
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`);

        dispatch({
            type:'GET_POKEMON_SUCCESS',
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type:"GET_POKEMON_FAILED",
        })
    }
}

export const PokemonDetailed=(pokemon)=>async dispatch =>{
    try{
        dispatch({
            type:"DETAIL_POKEMON_REQUEST"
        })

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        dispatch({
            type:'DETAIL_POKEMON_SUCCESS',
            payload: res.data,
            pokemon_name:pokemon
        })
    } catch (e) {
        dispatch({
            type:"DETAIL_POKEMON_FAILED",
        })
    }
}