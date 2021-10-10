import React from 'react';

function Card(props) {
    return (
        <div style={styles.wrapper}>
            <section className='card--main-section-card-container'>
                <header className='card--main-section-card-header'>
                    <h2 style={styles.headerTxt}>{props.name}</h2>
                </header>

                <section className='card--main-section-card-info'>
                    <div className='card--main-section-card-column-img'>
                        <img style={styles.cardImg} src={props.image} alt={props.imgAlt}/>
                    </div>

                    <section className='card--main-section-card-column-details'>
                        <section className='half-row'>
                            <section className='half-row--section'>
                                <h3 style={styles.cardInfoTitle}>Attribute</h3>
                                <p style={styles.cardInfoDetails}>{props.attribute}</p>
                            </section>

                            <section className='half-row--section'>
                                <h3 style={styles.cardInfoTitle}>Level</h3>
                                <p style={styles.cardInfoDetails}>{props.starLevel}</p>
                            </section>
                        </section>

                        <section className='full-row--section'>
                            <h3 style={styles.cardInfoTitle}>Card Type</h3>
                            <p style={styles.cardInfoDetails}>{props.type}</p>
                        </section>

                        <section className='full-row--section'>
                            <h3 style={styles.cardInfoTitle}>Sub Type</h3>
                            <p style={styles.cardInfoDetails}>{props.race}</p>
                        </section>

                        <section className='half-row'>
                            <section className='half-row--section'>
                                <h3 style={styles.cardInfoTitle}>ATK</h3>
                                <p style={styles.cardInfoDetails}>{props.atk}</p>
                            </section>

                            <section className='half-row--section'>
                                <h3 style={styles.cardInfoTitle}>DEF</h3>
                                <p style={styles.cardInfoDetails}>{props.def}</p>
                            </section>
                        </section>

                        <section className='full-row--section-effect'>
                            <h3 style={styles.cardInfoTitle}>Card Text</h3>
                            <p style={styles.cardInfoDetails}>{props.description}</p>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default Card;

// CSS Modules
const styles = {
    container: {
        minHeight: '424px',
        width: '705px',
        borderRadius: '4px',
        backgroundColor: '#BFC7C0',
        fontFamily: 'casablanca-urw, sans-serif',
        height: 'auto',
    },
    headerTxt: {
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: '500',
        lineHeight: '69px',
        marginTop: '0',
    },
    cardImg: {
        width: '200px',
        height: '300px',
        marginTop: '0',
        alignSelf: 'center',
    },
    cardInfoTitle: {
        fontWeight: '500',
        color: '#071D3B',
        fontSize: '23px',
    },
    cardInfoDetails: {
        fontWeight: '300',
        color: '#4E574F',
        fontSize: '23px',
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
}