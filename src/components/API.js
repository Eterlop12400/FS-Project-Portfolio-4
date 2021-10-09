import React, {useEffect, useState} from 'react';
import Card from './Card';
import cardBack from '../images/card-back.png';

function API(props) {

    // Setting state based on existing data from localStorage or if not it will be an empty array.
    const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem('cardSearchHistory')) || []);

    // Setting state to true, this will determine which component set is loaded. Either from a specific search or a random card.
    const [toggle, setToggle] = useState(true);

    // Setting up our state and leaving it empty when we load the page.
    const [statusCall, setStatusCall] = useState(null);
    const [cardDetails, setCardDetails] = useState({
        data: [{
            name: 'Card Info',
            type: 'N/A',
            card_images: [{image_url: cardBack}],
            desc: 'N/A',
            atk: 'N/A',
            def: 'N/A',
            attribute: 'N/A',
            level: 'N/A',
            race: 'N/A',
        }]});

    // Setting up our state and leaving it empty when we load the page.
    const [randomCardDetails, setRandomCardDetails] = useState({
        name: 'Card Info',
        card_images: [{image_url: cardBack}],
        desc: 'N/A',
        type: 'N/A',
        atk: 'N/A',
        def: 'N/A',
        attribute: 'N/A',
        level: 'N/A',
        race: 'N/A',
    });

    // Setting the url for our API call based on the props being passed in from Search.js.
    let urlForCardDetails = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${props.url}`;

    // Using fetch, async, and await to get our API information. We are calling the function below.
    useEffect(() => {

        // This function will run when the user puts in data for the input and hits enter or presses the search button.
        async function fetchAPI() {
            let responseForCardDetails;
            let cardInfo;

            // We will not call the API if the value is null like it is on the initial page load.
            if (props.url !== null) {
                // We will use a try catch finally when making a call to the API.
                try {
                    responseForCardDetails = await fetch(urlForCardDetails);
                    setStatusCall(true);
                } catch (e) {
                    setStatusCall(false); // If there is an error we will set the state of statusCall to false.
                } finally {
                    // Only if it comes back without an error we will go ahead and fetch the API data and set it in our card details state.
                    if(statusCall === true) {
                        responseForCardDetails = await fetch(urlForCardDetails);

                        const cardJsonData = await responseForCardDetails.json();
                        cardInfo = [];

                        cardInfo = cardJsonData;

                        setCardDetails(cardInfo);

                        // Saving info to our history
                        let searchHistoryList = searchHistory;

                        let cardExist = false;

                        /*
                        If the card exists in our search history we will remove it from the array and put it at the beginning.
                        We will then update out local storage.
                         */
                        for (let i = 0; i < searchHistoryList.length; i++) {
                            if (cardInfo.data[0].name === searchHistoryList[i].cardName) {
                                cardExist = true;
                                searchHistoryList.splice(i, 1);
                                searchHistoryList.unshift({cardName: cardInfo.data[0].name, cardImg: cardInfo.data[0].card_images[0].image_url});
                                window.localStorage.setItem('cardSearchHistory', JSON.stringify(searchHistory));
                            }
                        }

                        // If the card does not exist in our search history we will then add it to our search history.
                        if (cardExist === false) {
                            searchHistoryList.unshift({cardName: cardInfo.data[0].name, cardImg: cardInfo.data[0].card_images[0].image_url});
                            setSearchHistory(searchHistoryList);

                            /*
                            As we don't want our search history to be too long we will only ensure we have a max of 6 items,
                            so we will remove the last item in the array when a new one is added.
                            */
                            if (searchHistoryList.length > 6) {
                                searchHistoryList.pop();
                            }

                            // We will then update out local storage.
                            window.localStorage.setItem('cardSearchHistory', JSON.stringify(searchHistory));
                        }

                        // Setting toggle to display searched card.
                        setToggle(true);
                    }
                }
            }
        }
        fetchAPI();
    }, [urlForCardDetails, props.url, statusCall, searchHistory]); // Stating our dependencies.

    return (
        <div>
            <div style={styles.btnContainer}>
                <button style={styles.btn} onClick={getRandomCard}>Random Card</button>
            </div>

            <div style={styles.container}>
            {/*  If the toggle is set to true it will display API structure based on a search call.  */}
            {toggle && <Card
                name={cardDetails.data[0].name}
                image={cardDetails.data[0].card_images[0].image_url}
                type={cardDetails.data[0].type}
                description={cardDetails.data[0].desc}
                atk={cardDetails.data[0].atk}
                def={cardDetails.data[0].def}
                starLevel={cardDetails.data[0].level}
                attribute={cardDetails.data[0].attribute}
                race={cardDetails.data[0].race}
                imgAlt={cardDetails.data[0].name}
            /> }

            {/*  If the toggle is set to false it will display API structure based on the random call.  */}
            {!toggle && <Card
                name={randomCardDetails.name}
                image={randomCardDetails.card_images[0].image_url}
                type={randomCardDetails.type}
                description={randomCardDetails.desc}
                atk={randomCardDetails.atk}
                def={randomCardDetails.def}
                starLevel={randomCardDetails.level}
                attribute={randomCardDetails.attribute}
                race={randomCardDetails.race}
                imgAlt={randomCardDetails.name}
            /> }
            </div>
        </div>
    );

    // This function will run when clicking on the random card button.
    async function getRandomCard () {
            const url = `https://db.ygoprodeck.com/api/v7/randomcard.php`;
            let searchHistoryList = searchHistory;

            const responseForCardDetails = await fetch(url);

            const cardJsonData = await responseForCardDetails.json();
            let cardInfo = [];

            cardInfo = cardJsonData;

            setRandomCardDetails(cardInfo);

            let cardExist = false;

            /*
            If the card exists in our search history we will remove it from the array and put it at the beginning.
            We will then update out local storage.
            */
            for (let i = 0; i < searchHistoryList.length; i++) {
                if (cardInfo.name === searchHistoryList[i].cardName) {
                    cardExist = true;
                    searchHistoryList.splice(i, 1);
                    searchHistoryList.unshift({cardName: cardInfo.name, cardImg: cardInfo.card_images[0].image_url});
                    window.localStorage.setItem('cardSearchHistory', JSON.stringify(searchHistory));
                }
            }

            /*
            As we don't want our search history to be too long we will only ensure we have a max of 6 items,
            so we will remove the last item in the array when a new one is added.
            */
            if (searchHistoryList.length > 6) {
                searchHistoryList.pop();
            }

            // If the card does not exist in our search history we will then add it to our search history.
            if (cardExist === false) {
                searchHistoryList.unshift({cardName: cardInfo.name, cardImg: cardInfo.card_images[0].image_url});
                setSearchHistory(searchHistoryList);

                // We will then update out local storage.
                window.localStorage.setItem('cardSearchHistory', JSON.stringify(searchHistory));
            }

            // Setting toggle to display random card.
            setToggle(false);
        }
    }

export default API;

// CSS Modules
const styles = {
    container: {
        fontFamily: 'casablanca-urw, sans-serif',
        display: 'flex',
        marginTop: '30px',
    },
    btnContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
    },
    btn: {
        padding: '20px 75px',
        backgroundColor: '#071D3B',
        color: '#FFC300',
        fontSize: '23px',
        fontWeight: '500',
        borderRadius: '4px',
        fontFamily: 'casablanca-urw, sans-serif',
    }
}
