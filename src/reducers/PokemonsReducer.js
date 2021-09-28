const initState = {
    loading: false,
    dataPokemons: [],
    errorMsg: "",
    count:0
};

const PokemonsReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_POKEMON_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "GET_POKEMON_SUCCESS":
            return {
                ...state,
                loading: false,
                dataPokemons: action.payload.results,
                errorMsg:"",
                count: action.payload.count
            };
        case "GET_POKEMON_FAILED":
            return {
                ...state,
                loading: false,
                errorMsg: "Unable to get data"
            };
        default:
            return state;
    }
}

export default PokemonsReducer;