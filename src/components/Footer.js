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
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
    }
}