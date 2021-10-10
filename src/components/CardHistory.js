import React from "react";

function CardHistory(props) {

    return (
        <div className='card-history--main-container'>
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