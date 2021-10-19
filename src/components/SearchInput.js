import React, {useEffect, useState} from 'react';

// Importing Component
import Api from "./API";

// Importing Icon
import { BsSearch } from "react-icons/bs";

function SearchInput() {

    // Setting our states for cardName, cardList, and statusCall.
    const [cardName, setCardName] = useState(null);
    const [cardList, setCardList] = useState([]);
    const [statusCall, setStatusCall] = useState(null);

    // Using fetch, async, and await to get our API information. We are calling the function below.
    useEffect(() => {
        async function fetchAPI() {
            const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;
            let responseForCardDetails;

            // We will use a try catch finally when making a call to the API.
            try {
                responseForCardDetails = await fetch(url);
                setStatusCall(true);
            } catch (e) {
                setStatusCall(false); // If there is an error we will set the state of statusCall to false.

                // If we get an error we will display the error on the page.
                document.querySelector('.errorMsg').innerText = "Card searching is currently unavailable, try again later!";
            } finally {

                // Only if it comes back without an error we will go ahead and fetch the API data and set it in our card list state.
                if (statusCall === true) {
                    const cardJsonData = await responseForCardDetails.json();
                    let cardInfo = [];

                    cardInfo = cardJsonData;

                    createCardList(cardInfo); // This method will be used to set our list of cards.
                }
            }
        }
        fetchAPI();
    }, [statusCall]);

    // This function will take the value of the input and set it to the state if not left blank.
    function handleSubmit (e) {
        let cardExists = false;
        let inputElm = document.querySelector('.cardInput');
        let errorMsg = document.querySelector('.errorMsg');
        let inputValue = inputElm.value.toLowerCase();

        if (statusCall === false) {

            // If we get an error we will display the error on the page.
            errorMsg.innerText = "Card searching is currently unavailable, try again later!";
        } else {
            if (e.key === 'Enter' || e.type === 'click') {
                if (inputValue === '') {
                    // If the user tries to enter blank data we will display the error on the page.
                    errorMsg.innerText = "Please don't leave the input blank, try again!";
                } else {

                    /*
                    We will loop through our list of cards to see if the value matches a card in the list.
                    If a card exists we will set cardExists to true.
                     */
                    for(let i = 0; i < cardList.length; i++) {
                        if(inputValue === cardList[i]) {
                            cardExists = true;
                        }
                    }

                    // If we found that the card does exist we will run this.
                    if (cardExists === true) {
                        if (inputValue !== '') {
                            setCardName(inputValue);
                            inputElm.value = ''; // Clearing the text input.
                            errorMsg.innerText = ''; // Clearing the error message.
                        }
                    } else {
                        // If we found the card does not exist this will run and will display and error to the user.
                        errorMsg.innerText = "That card couldn't found, please try again!";
                        inputElm.value = ''; // Clearing the text input.
                    }
                }
            }
        }
    }

    return (
        <div className='search-input--main-container'>
            <section className='search-input--main-section'>
                <div className='search-input--main-input-container'>
                    <div>
                        <p style={styles.inputLabel}>Enter A Card Name:</p>
                        <input style={styles.input} onKeyPress={handleSubmit} className='cardInput' type='text' />
                        <button style={styles.btn} onClick={handleSubmit}><BsSearch style={styles.btnIcon} /></button>
                    </div>
                    <p className='errorMsg' style={styles.error} />
                </div>

                <p style={styles.subText}>OR</p>
                <Api url={cardName} />
            </section>
        </div>
    );

    // This function will set our card list state with a current list of all available cards in the game.
    function createCardList (apiCardInfo) {
        let cardLists = [];

        for(let i = 0; i < apiCardInfo.data.length; i++) {
            cardLists.push(apiCardInfo.data[i].name.toLowerCase());
        }
        setCardList(cardLists);
    }
}

export default SearchInput;

// CSS Modules
const styles = {
    inputLabel: {
        marginTop: '0',
        marginBottom: '3px',
        fontFamily: 'casablanca-urw, sans-serif',
        fontSize: '23px',
        fontWeight: '500',
        color: '#071D3B',
        paddingTop: '100px',
    },
    input: {
        height: '42px',
        width: '75%',
        paddingLeft: '5px',
        paddingRight: '5px',
        color: '#4E574F',
        fontFamily: 'casablanca-urw, sans-serif',
        fontSize: '23px',
        fontWeight: '500',
    },
    btn: {
        height: '48px',
        position: 'relative',
        width: '55px',
        backgroundColor: '#071D3B',
        top: '7px',
        left: '-2px',
        border: 'none',
        borderRadius: '0 4px 4px 0',
    },
    btnIcon: {
        color: '#FFC300',
        height: '31px',
        width: '31px',
    },
    subText: {
        fontFamily: 'casablanca-urw, sans-serif',
        fontSize: '23px',
        fontWeight: '500',
        color: '#071D3B',
        textAlign: 'center',
    },
    error: {
        color: '#ff6d6d',
        fontFamily: 'casablanca-urw, sans-serif',
        fontSize: '23px',
        fontWeight: '300',
        marginTop: '2px',
    }
}