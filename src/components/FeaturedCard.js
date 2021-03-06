import React from 'react';


function FeaturedCard(props) {

    return (
        <div className='featured-card--main-container'>
            <h2 style={styles.containerMainHeader}>Featured Card</h2>
            <section style={styles.container}>
                <div style={styles.header}>
                    <h3 style={styles.cardHeader}>{props.cardName}</h3>
                </div>

                <img style={styles.card} src={props.img} alt={props.imgAlt}/>
            </section>
        </div>
    );
}

export default FeaturedCard;

// CSS Modules
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