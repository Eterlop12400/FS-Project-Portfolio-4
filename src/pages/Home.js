import React, {useEffect, useState} from "react";
import FeaturedCard from "../components/FeaturedCard";
import desktopBanner from '../images/desktop-banner.png';
import cardBack from '../images/card-back.png';

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
        <main style={styles.container}>

            <section style={styles.section}>
                <article style={styles.article}>
                    <h2 style={styles.articleTitle}>Welcome to Yu-Gi-Oh Card Vault</h2>
                    <img style={styles.img} src={desktopBanner} alt='desktop banner'/>
                    <h3 style={styles.articleSubTitle}>About us</h3>
                    <p style={styles.p}>
                        Yu-Gi-Oh Card Vault is a website focused on the Yu-Gi-Oh Trading Card game where users can search
                        for specific cards by entering a card name. Users can even find new cards by viewing a random card
                        from the existing 10,000+ cards in the game with a click of a button.
                    </p>
                </article>
            </section>

            <FeaturedCard style={styles.section} cardName={featuredCardDetails.name} img={featuredCardDetails.card_images[0].image_url} imgAlt={featuredCardDetails.name} />

        </main>
    );
}

export default Home;

const styles = {
    container: {
        width: '75%',
        backgroundColor: '#FDF5D9',
        margin: '0px auto',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row-reverse',
        paddingTop: '50px',
        paddingBottom: '100px',
    },
    body: {
        textAlign: 'center',
        marginTop: '0',
    },
    article: {
        width: '396px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'casablanca-urw, sans-serif',
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
    section: {
        width: '50%',
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