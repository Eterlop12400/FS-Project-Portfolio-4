import React from 'react';

function Card(props) {
    return (
        <div style={styles.wrapper}>
        <div style={styles.container}>
            <div style={styles.headerContainer}>
                <h2 style={styles.header}>{props.name}</h2>
            </div>

            <section style={styles.section}>
            <div style={styles.sectionColumnOne}>
                <img style={styles.cardImg} src={props.image} alt={props.imgAlt}/>
            </div>

            <div style={styles.sectionColumnTwo}>

                <div style={styles.halfRow}>
                    <div style={styles.splitRow}>
                        <h3 style={styles.cardInfoTitle}>Attribute</h3>
                        <p style={styles.cardInfo}>{props.attribute}</p>
                    </div>

                    <div style={styles.splitRow}>
                        <h3 style={styles.cardInfoTitle}>Level</h3>
                        <p style={styles.cardInfo}>{props.starLevel}</p>
                    </div>
                </div>

                <div style={styles.row}>
                    <h3 style={styles.cardInfoTitle}>Card Type</h3>
                    <p style={styles.cardInfo}>{props.type}</p>
                </div>

                <div style={styles.row}>
                    <h3 style={styles.cardInfoTitle}>Sub Type</h3>
                    <p style={styles.cardInfo}>{props.race}</p>
                </div>

                <div style={styles.halfRow}>
                    <div style={styles.splitRow}>
                        <h3 style={styles.cardInfoTitle}>ATK</h3>
                        <p style={styles.cardInfo}>{props.atk}</p>
                    </div>

                    <div style={styles.splitRow}>
                        <h3 style={styles.cardInfoTitle}>DEF</h3>
                        <p style={styles.cardInfo}>{props.def}</p>
                    </div>
                </div>

                <div style={styles.effect}>
                    <h3 style={styles.cardInfoTitle}>Card Text</h3>
                    <p style={styles.cardInfo}>{props.description}</p>
                </div>


                {/*<p style={styles.rarity} >{props.rarity}</p>*/}
            </div>
            </section>

        </div>
        </div>
    );
}

export default Card;

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
    header: {
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
    effect: {
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
    cardInfo: {
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