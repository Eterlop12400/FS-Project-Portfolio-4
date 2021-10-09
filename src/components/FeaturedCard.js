import React from 'react';


function FeaturedCard(props) {

    return (
        <div style={styles.containerMain}>
            <h2 style={styles.containerMainHeader}>Featured Card</h2>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h3 style={styles.cardHeader}>{props.cardName}</h3>
                </div>

                <img style={styles.card} src={props.img} alt={props.imgAlt}/>
            </div>
        </div>
    );
}

export default FeaturedCard;

const styles = {
    card: {
        height: '321px',
        width: '220px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '40px',
    },
    container: {
        backgroundColor: '#BFC7C0',
        width: '398px',
        height: '464px',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
    },
    header: {
        backgroundColor: '#071D3B',
        height: '58px',
        width: '100%',
        color: '#F6C443',
        borderRadius:'4px 4px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    p: {
        marginTop: '40px',
        fontSize: '18px',
        fontWeight: '500',
    },
    containerMain: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        fontFamily: 'casablanca-urw, sans-serif',
    },
    containerMainHeader: {
        fontWeight: '500',
        fontSize: '32px',
        color: '#071D3B',
    },
    cardHeader: {
        fontWeight: '500',
        fontSize: '32px',
        textOverflow: 'ellipsis',
        maxWidth: '304px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },
}