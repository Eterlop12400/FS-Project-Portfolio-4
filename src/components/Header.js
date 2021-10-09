import React from 'react';

// React Component
import Nav from './Nav';

function Header(props) {
    return (
        <header style={styles.container}>
            <h1 style={styles.header}>{props.header}</h1>
            <Nav />
        </header>
    );
}

export default Header;

// CSS Module
const styles = {
    container: {
        fontFamily: 'casablanca-urw, sans-serif',
    },
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
    }
}