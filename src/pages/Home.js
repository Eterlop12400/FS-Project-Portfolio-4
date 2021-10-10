import React, {useEffect, useState} from "react";

// Importing Component
import FeaturedCard from "../components/FeaturedCard";

//Importing Images
import homeBanner from '../images/home-banner.png';
import cardBack from '../images/card-back.png';

// Importing Stylesheet
import '../CSS/style.css';

function Home() {

    const [featuredCardDetails, setFeaturedCardDetails] = useState({name: '',  card_images: [{image_url: ''}]});
    const [statusCall, setStatusCall] = useState(null);

    // Using fetch, async, and await to get our API information. We are calling the function below.
    useEffect(() => {
        async function fetchAPI() {
            const url = `https://db.ygoprodeck.com/api/v7/randomcard.php`
            let responseForCardDetails;

            try {
                responseForCardDetails = await fetch(url);

                if (responseForCardDetails.status === 200) {
                    setStatusCall(true);
                }

            } catch (e) {
                setFeaturedCardDetails({name: 'Card Info',  card_images: [{image_url: cardBack}]});
            } finally {

                if (statusCall === true) {
                    const cardJsonData = await responseForCardDetails.json();
                    let cardInfo = [];

                    cardInfo = cardJsonData;

                    setFeaturedCardDetails(cardInfo);
                }
            }
        }
        fetchAPI();
    }, [statusCall]);

    return (
        <main className='home--main-container'>
            <section className='home--main-section'>
                <article className='home--main-article'>
                    <h2 style={styles.articleTitle}>Welcome to Yu-Gi-Oh Card Vault</h2>
                    <img style={styles.img} src={homeBanner} alt='desktop banner'/>
                    <h3 style={styles.articleSubTitle}>About us</h3>
                    <p style={styles.p}>
                        Yu-Gi-Oh Card Vault is a website focused on the Yu-Gi-Oh Trading Card game where users can search
                        for specific cards by entering a card name. Users can even find new cards by viewing a random card
                        from the existing 10,000+ cards in the game with a click of a button.
                    </p>
                </article>
            </section>

            <FeaturedCard cardName={featuredCardDetails.name} img={featuredCardDetails.card_images[0].image_url} imgAlt={featuredCardDetails.name} />
        </main>
    );
}

export default Home;

const styles = {
    body: {
        textAlign: 'center',
        marginTop: '0',
    },
    articleTitle: {
        fontWeight: '500',
        fontSize: '32px',
        color: '#071D3B',
    },
    articleSubTitle: {
        fontWeight: '500',
        fontSize: '26px',
        marginBottom: '-18px',
        color: '#071D3B',
    },
    p: {
        lineHeight: '2',
        fontWeight: '300',
        fontSize: '18px',
        color: '#4E574F',
    },
    img: {
        borderRadius: '4px',
    },
}