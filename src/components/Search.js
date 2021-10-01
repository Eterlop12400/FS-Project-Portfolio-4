import React, {useState} from 'react';
import Api from "./API";

function Search() {
    const [pokemonName, setPokemonName] = useState(null);

    // This function will take the value of the input and set it to the state if not left blank.
    function handleClick () {
        let inputElm = document.querySelector('.pokemonInput');
        let inputValue = inputElm.value.toLowerCase();

        if (inputValue !== '') {
            setPokemonName(inputValue);
        }

        inputElm.value = '';
    }

    return (
        <div className='test'>
            <input className='pokemonInput' type='text' />
            <button onClick={handleClick}>Search!</button>
            <Api url={pokemonName} />
        </div>
    );
}

export default Search;