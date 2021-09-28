const initState = {
    loading: false,
    dataPokemon: {},
    errorMsg: ""
}

const PokemonDetailReducer = (state = initState, action) => {
    switch (action.type) {
        case "DETAIL_POKEMON_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "DETAIL_POKEMON_SUCCESS":
            return {
                ...state,
                loading: false,
                dataPokemon: {
                    ...state.data,
                    [action.pokemon_name]: action.payload
                },
                errorMsg: "",
            };
        case "DETAIL_POKEMON_FAILED":
            return {
                ...state,
                loading: false,
                errorMsg: "Unable to get data"
            };
        default:
            return state;
    }
}

export default PokemonDetailReducer;