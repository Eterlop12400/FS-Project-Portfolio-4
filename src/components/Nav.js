import React from 'react';

import  { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div style={styles.container}>
            <nav style={styles.nav}>
                <NavLink to='/Home' style={styles.linkDecorationStart} activeStyle={{color: "#FFC300", textDecoration: 'underline'}}>
                    Home
                </NavLink>
                <NavLink to='/Search' style={styles.linkDecorationMiddle} activeStyle={{color: "#FFC300", textDecoration: 'underline'}}>
                    Search
                </NavLink>
                <NavLink to='/SearchHistory' style={styles.linkDecorationEnd} activeStyle={{color: "#FFC300", textDecoration: 'underline'}}>
                    Search History
                </NavLink>
            </nav>
        </div>
    );
}

export default Nav;

// Css Modules
const styles = {
    container: {
        backgroundColor: '#001D3D',
        display: 'flex',
        justifyContent: 'center',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '75%',
        paddingBottom: '50px',
    },
    linkDecorationStart: {
        color: '#FDF5D9',
        height: '33px',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: '32px',
        textDecoration: 'none',
        fontWeight: '500',
        width: '33%',
        textAlign: 'start',
    },
    linkDecorationMiddle: {
        color: '#FDF5D9',
        height: '33px',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: '32px',
        textDecoration: 'none',
        fontWeight: '500',
        width: '33%',
        textAlign: 'center',
    },
    linkDecorationEnd: {
        color: '#FDF5D9',
        height: '33px',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: '32px',
        textDecoration: 'none',
        fontWeight: '500',
        width: '33%',
        textAlign: 'end'
    },
}