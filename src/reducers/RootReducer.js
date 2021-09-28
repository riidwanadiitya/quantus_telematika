import { combineReducers } from 'redux';
import PokemonDetailReducer from './PokemonDetailReducer';
import PokemonsReducer from './PokemonsReducer';

const RootReducer = combineReducers({
    Pokemons: PokemonsReducer,
    PokemonDetail: PokemonDetailReducer

})

export default RootReducer;