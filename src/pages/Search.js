import React from "react";

import Searchs from "../components/Search";

function Search() {

    return (
        <main style={styles.container}>
            <div style={styles.search}>
                <Searchs />
            </div>
        </main>
    );
}

export default Search;

const styles = {
    container: {
        width: '75%',
        backgroundColor: '#FDF5D9',
        margin: '0px auto',
        minHeight: '800px',
        height: 'auto',
        paddingBottom: '10px',
    },
    body: {
        textAlign: 'center',
        marginTop: '0',
    },
    search: {
        display: 'flex',
        justifyItems: 'center',
        width: '100%',
    }
}