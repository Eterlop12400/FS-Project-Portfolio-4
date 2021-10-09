import React from "react";

function CardHistory(props) {

    return (
        <div style={styles.container}>
            <div src={props.imgContainer}>
                <img src={props.img} alt={props.imgAlt} style={styles.img} />
            </div>

            <div style={styles.nameContainer}>
                <h2 style={styles.cardName}>{props.cardName}</h2>
            </div>
        </div>
    );
}

export default CardHistory;

// CSS Modules
const styles = {
    container: {
        width: '396px',
        backgroundColor: '#C7DFFC',
        height: '180px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px',
        justifyContent: 'center',
        boxShadow: '0px 3px 15px rgba(0,0,0,0.1)',
        fontFamily: 'casablanca-urw, sans-serif',
    },
    imgContainer: {
        width: '50%',
    },
    img: {
        width: '100px',
        height: '146px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    nameContainer: {
        width: '50%',
    },
    cardName: {
        marginLeft: '20px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: '28px',
    }
}