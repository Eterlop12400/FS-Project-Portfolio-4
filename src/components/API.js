import React, {useEffect, useState} from 'react';
import Card from './Card';
import cardBack from '../images/card-back.png';

function API(props) {

    const storageHistory = JSON.parse(localStorage.getItem('cardSearchHistory')) || [];

    // Setting up our state and leaving it empty when we load the page.
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

    const [toggle, setToggle] = useState(true);
    const [statusCall, setStatusCall] = useState(null);
    const [searchHistory, setSearchHistory] = useState(storageHistory);

    // Setting the url for our API call based on the props being passed in from Search.js.
    let urlForCardDetails = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${props.url}`;

    // Using fetch, async, and await to get our API information. We are calling the function below.
    useEffect(() => {
        async function fetchAPI() {
            let responseForCardDetails;
            let cardInfo;

            // We will not call the API if the value is null like it is on the initial page load.
            if (props.url !== null) {
                try {
                    responseForCardDetails = await fetch(urlForCardDetails);
                    setStatusCall(true);
                } catch (e) {
                    setStatusCall(false);
                } finally {

                    if(statusCall === true) {
                        responseForCardDetails = await fetch(urlForCardDetails);

                        const cardJsonData = await responseForCardDetails.json();
                        cardInfo = [];

                        cardInfo = cardJsonData;

                        setCardDetails(cardInfo);

                        localStorage.clear();

                        // Saving info to our history
                        let searchHistoryList = searchHistory;

                        let cardExist = false;

                        for (let i = 0; i < searchHistoryList.length; i++) {
                            if (cardInfo.data[0].name === searchHistoryList[i].cardName) {
                                cardExist = true;
                                searchHistoryList.splice(i, 1);
                                searchHistoryList.unshift({cardName: cardInfo.data[0].name, cardImg: cardInfo.data[0].card_images[0].image_url});
                                window.localStorage.setItem('cardSearchHistory', JSON.stringify(searchHistory));
                            }
                        }

                        if (cardExist === false) {
                            searchHistoryList.unshift({cardName: cardInfo.data[0].name, cardImg: cardInfo.data[0].card_images[0].image_url});
                            setSearchHistory(searchHistoryList);

                            if (searchHistoryList.length > 6) {
                                searchHistoryList.pop();
                            }

                            window.localStorage.setItem('cardSearchHistory', JSON.stringify(searchHistory));
                        }

                        // setting toggle to display searched card.
                        setToggle(true);
                    }
                }
            }
        }
        fetchAPI();
    }, [urlForCardDetails, props.url, statusCall, searchHistory]);

    return (
        <div>
            <div style={styles.btnContainer}>
                <button style={styles.btn} onClick={getRandomCard}>Random Card</button>
            </div>

            <div style={styles.container}>
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
            /> }
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
            /> }
            </div>
        </div>
    );

    async function getRandomCard () {
            const url = `https://db.ygoprodeck.com/api/v7/randomcard.php`;
            let searchHistoryList = searchHistory;

            const responseForCardDetails = await fetch(url);

            const cardJsonData = await responseForCardDetails.json();
            let cardInfo = [];

            cardInfo = cardJsonData;

            setRandomCardDetails(cardInfo);

            let cardExist = false;

            for (let i = 0; i < searchHistoryList.length; i++) {
                if (cardInfo.name === searchHistoryList[i].cardName) {
                    cardExist = true;
                    searchHistoryList.splice(i, 1);
                    searchHistoryList.unshift({cardName: cardInfo.name, cardImg: cardInfo.card_images[0].image_url});
                    window.localStorage.setItem('cardSearchHistory', JSON.stringify(searchHistory));
                }
            }

            if (searchHistoryList.length > 6) {
                searchHistoryList.pop();
            }

            if (cardExist === false) {
                searchHistoryList.unshift({cardName: cardInfo.name, cardImg: cardInfo.card_images[0].image_url});
                setSearchHistory(searchHistoryList);

                window.localStorage.setItem('cardSearchHistory', JSON.stringify(searchHistory));
            }

            setToggle(false);
        }
    }

export default API;

const styles = {
    btn: {
        padding: '20px 75px',
        backgroundColor: '#071D3B',
        color: '#FFC300',
        fontSize: '23px',
        fontWeight: '500',
        borderRadius: '4px',
        fontFamily: 'casablanca-urw, sans-serif',
    },
    container: {
        fontFamily: 'casablanca-urw, sans-serif',
        display: 'flex',
        marginTop: '30px',
    },
    btnContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
    }
}
