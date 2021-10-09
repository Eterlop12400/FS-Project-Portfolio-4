import React from 'react';

import Nav from './Nav';

function Header(props) {
    return (
        <div style={styles.typography}>
            <h1 style={styles.header}>{props.header}</h1>
            <Nav />
        </div>
    );
}

export default Header;

const styles = {
    header: {
        backgroundColor: '#001D3D',
        color: '#FFC300',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
        fontWeight: '700',
        fontSize: '42px',
    },
    typography: {
        fontFamily: 'casablanca-urw, sans-serif',
    }
}