import React, {useEffect, useState} from 'react';
import Card from './Card';

function API(props) {

    // Setting up our state and leaving it empty when we load the page.
    const [cardDetails, setCardDetails] = useState({data: [{name: '', type: '', card_images: [{image_url_small: ''}], desc: ''}]});

    // Setting the url for our API call based on the props being passed in from Search.js.
    let urlForCardDetails = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${props.url}`;


    // Using fetch, async, and await to get our API information. We are calling the function below.
    useEffect(() => {
        async function fetchAPI() {

            // We will not call the API if the value is null like it is on the initial page load.
            if (props.url !== null) {
                const responseForCardDetails = await fetch(urlForCardDetails);

                document.querySelector('.error-msg').innerText = '';

                // We will check the response status of our fetch call, if we get a GET error an error message will appear.
                if (responseForCardDetails.status !== 200) {
                    document.querySelector('.error-msg').innerText = 'That card does not exist, try again!';
                } else {
                    const cardJsonData = await responseForCardDetails.json();
                    let cardInfo = [];

                    cardInfo = cardJsonData;

                    setCardDetails(cardInfo);
                }
            }
        }
        fetchAPI();
    }, [urlForCardDetails, props.url]);

    return (
        <div>
            <p>OR</p>

            <Card
                name={cardDetails.data[0].name}
                image={cardDetails.data[0].card_images[0].image_url_small}
                type={cardDetails.data[0].type}
                description={cardDetails.data[0].desc}
            />
            <p className='error-msg'>Please enter a card name. ex. Dark Magician</p>
        </div>
    );
}

export default API;
