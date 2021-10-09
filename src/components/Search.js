import React, {useEffect, useState} from 'react';
import Api from "./API";
import { BsSearch } from "react-icons/bs";

function Search() {
    const [cardName, setCardName] = useState(null);
    const [cardList, setCardList] = useState([]);
    const [statusCall, setStatusCall] = useState(null);

    // Using fetch, async, and await to get our API information. We are calling the function below.
    useEffect(() => {
        async function fetchAPI() {
            const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;
            let responseForCardDetails;

            try {
                responseForCardDetails = await fetch(url);
                setStatusCall(true);
            } catch (e) {
                setStatusCall(false);

                document.querySelector('.errorMsg').innerText = "Card searching is currently unavailable, try again later!";
            } finally {

                if (statusCall === true) {
                    const cardJsonData = await responseForCardDetails.json();
                    let cardInfo = [];

                    cardInfo = cardJsonData;

                    createCardList(cardInfo);
                }
            }
        }
        fetchAPI();
    }, [statusCall]);

    // This function will take the value of the input and set it to the state if not left blank.
    function handleSubmitByEnter (e) {
        let cardExists = false;
        let inputElm = document.querySelector('.cardInput');
        let errorMsg = document.querySelector('.errorMsg');
        let inputValue = inputElm.value.toLowerCase();

        if (statusCall === false) {
            errorMsg.innerText = "Card searching is currently unavailable, try again later!";
        } else {
            if (e.key === 'Enter') {
                if (inputValue === '') {
                    errorMsg.innerText = "Please don't leave the input blank, try again!";
                } else {
                    for(let i = 0; i < cardList.length; i++) {
                        if(inputValue === cardList[i]) {
                            cardExists = true;
                        }
                    }

                    if (cardExists === true) {
                        if (inputValue !== '') {
                            setCardName(inputValue);
                            inputElm.value = '';
                            errorMsg.innerText = '';
                        }
                    } else {
                        errorMsg.innerText = "That card couldn't found, please try again!";
                        inputElm.value = '';
                    }
                }
            }
        }
    }

    function handleSubmitByClick (e) {
        let cardExists = false;
        let inputElm = document.querySelector('.cardInput');
        let errorMsg = document.querySelector('.errorMsg');
        let inputValue = inputElm.value.toLowerCase();


        if (statusCall === false) {
            errorMsg.innerText = "Card searching is currently unavailable, try again later!";
        } else {
            if (inputValue === '') {
                errorMsg.innerText = "Please don't leave the input blank, try again!";
            } else {
                for(let i = 0; i < cardList.length; i++) {
                    if(inputValue === cardList[i]) {
                        cardExists = true;
                    }
                }
                if (cardExists === true) {
                    if (inputValue !== '') {
                        setCardName(inputValue);
                        inputElm.value = '';
                        errorMsg.innerText = '';
                    }
                } else {
                    errorMsg.innerText = "That card couldn't found, please try again!";
                    inputElm.value = '';
                }
            }
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.containerTwo}>
            <p style={styles.inputLabel}>Enter a card name:</p>
            <input style={styles.input} onKeyPress={handleSubmitByEnter} className='cardInput' type='text' />
            <button style={styles.btn} onClick={handleSubmitByClick}><BsSearch style={styles.btnIcon} /></button>
            <p className='errorMsg' style={styles.error}></p>
            <p style={styles.subText}>OR</p>
            <Api url={cardName} />
            </div>
        </div>
    );

    function createCardList (info) {
        let cardLists = [];

        for(let i = 0; i < info.data.length; i++) {
            cardLists.push(info.data[i].name.toLowerCase());
        }
        setCardList(cardLists);
    }
}

export default Search;

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
        width: '396px',
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
        border: 'none',
        borderRadius: '4px',
    },
    btnIcon: {
        color: '#FFC300',
        height: '31px',
        width: '31px',
    },
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '75%',
    },
    containerTwo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
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