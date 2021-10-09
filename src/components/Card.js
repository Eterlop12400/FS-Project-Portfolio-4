import React from 'react';

function Card(props) {
    return (
        <div style={styles.wrapper}>
            <section style={styles.container}>
                <header style={styles.headerContainer}>
                    <h2 style={styles.headerTxt}>{props.name}</h2>
                </header>

                <section style={styles.section}>
                    <div style={styles.sectionColumnOne}>
                        <img style={styles.cardImg} src={props.image} alt={props.imgAlt}/>
                    </div>

                    <section style={styles.sectionColumnTwo}>
                        <section style={styles.halfRow}>
                            <section style={styles.splitRow}>
                                <h3 style={styles.cardInfoTitle}>Attribute</h3>
                                <p style={styles.cardInfoDetails}>{props.attribute}</p>
                            </section>

                            <section style={styles.splitRow}>
                                <h3 style={styles.cardInfoTitle}>Level</h3>
                                <p style={styles.cardInfoDetails}>{props.starLevel}</p>
                            </section>
                        </section>

                        <section style={styles.row}>
                            <h3 style={styles.cardInfoTitle}>Card Type</h3>
                            <p style={styles.cardInfoDetails}>{props.type}</p>
                        </section>

                        <section style={styles.row}>
                            <h3 style={styles.cardInfoTitle}>Sub Type</h3>
                            <p style={styles.cardInfoDetails}>{props.race}</p>
                        </section>

                        <section style={styles.halfRow}>
                            <section style={styles.splitRow}>
                                <h3 style={styles.cardInfoTitle}>ATK</h3>
                                <p style={styles.cardInfoDetails}>{props.atk}</p>
                            </section>

                            <section style={styles.splitRow}>
                                <h3 style={styles.cardInfoTitle}>DEF</h3>
                                <p style={styles.cardInfoDetails}>{props.def}</p>
                            </section>
                        </section>

                        <section style={styles.effectTxt}>
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
    headerContainer: {
        height: '69px',
        width: '705px',
        borderRadius: '4px 4px 0 0',
        backgroundColor: '#071D3B',
        color: '#F6C443',
    },
    headerTxt: {
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: '500',
        lineHeight: '69px',
        marginTop: '0',
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    sectionColumnOne: {
        width: '40%',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionColumnTwo: {
        width: '50%',
        marginTop: '10px',
    },
    cardImg: {
        width: '200px',
        height: '300px',
        marginTop: '0',
        alignSelf: 'center',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: '4px',
        paddingLeft: '8px',
        paddingRight: '8px',
        height: '42px',
        alignItems: 'center',
        marginBottom: '5px',
    },
    effectTxt: {
        backgroundColor: '#FFFFFF',
        borderRadius: '4px',
        minHeight: '42px',
        height: 'auto',
        padding: '1px 8px',
        marginBottom: '10px',
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
    halfRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    splitRow: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: '4px',
        paddingLeft: '8px',
        paddingRight: '8px',
        height: '42px',
        alignItems: 'center',
        marginBottom: '5px',
        width: '44%',
    },
}