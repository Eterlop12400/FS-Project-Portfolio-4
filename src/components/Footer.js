import React from 'react';

function Footer(props) {
    return (
        <div>
            <p style={styles.footer}>{props.footer}</p>
        </div>
    );
}

export default Footer;

const styles = {
    footer: {
        backgroundColor: 'black',
        color: 'white',
        height: '116px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
        fontWeight: '300',
        fontSize: '23px',
        fontFamily: 'casablanca-urw, sans-serif',
    }
}