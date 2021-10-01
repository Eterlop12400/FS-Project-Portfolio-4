import React, {useState} from 'react';
import Api from "./API";

function Search() {
    const [cardName, setCardName] = useState(null);

    // This function will take the value of the input and set it to the state if not left blank.
    function handleClick () {
        let inputElm = document.querySelector('.cardInput');
        let inputValue = inputElm.value.toLowerCase();

        if (inputValue !== '') {
            setCardName(inputValue);
        }

        inputElm.value = '';
    }

    return (
        <div className='test'>
            <input className='cardInput' type='text' />
            <button onClick={handleClick}>Search!</button>
            <Api url={cardName} />
        </div>
    );
}

export default Search;