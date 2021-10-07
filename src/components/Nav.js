import React from 'react';

import  { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div style={styles.container}>
            <nav style={styles.nav}>
                <NavLink to='/Home' style={styles.linkDecoration} activeStyle={{color: "#FFC300", textDecoration: 'underline'}}>
                    Home
                </NavLink>
                <NavLink to='/Search' style={styles.linkDecoration} activeStyle={{color: "#FFC300", textDecoration: 'underline'}}>
                    Search
                </NavLink>
                <NavLink to='/Search_History' style={styles.linkDecoration} activeStyle={{color: "#FFC300", textDecoration: 'underline'}}>
                    Search History
                </NavLink>
            </nav>
        </div>
    );
}

export default Nav;

const styles = {
    container: {
        backgroundColor: '#001D3D',
        display: 'flex',
        justifyContent: 'center',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        paddingBottom: '50px',
    },
    linkDecoration: {
        color: '#FDF5D9',
        height: '33px',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: '1.25rem',
        textDecoration: 'none',
    },
}