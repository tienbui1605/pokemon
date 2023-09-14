import ApiClient from "../utils/ApiUtils";

export async function fetchPokemon(){
    const fetchPokemonUrl='/pokemon?offset=20&limit=1281'
    const pokemon = await ApiClient.get(fetchPokemonUrl)

    console.log("pokemon Réult", pokemon)
   return pokemon

}