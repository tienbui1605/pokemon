import React,{useEffect} from 'react';

import { fetchPokemon } from './apis';
const App = props => {
    const fetchPokemon=async()=>await fetchPokemon;
    useEffect (async()=>{
        fetchPokemon()
    },[])

    return (
        <div>
            
        </div>
    );
};


export default App;