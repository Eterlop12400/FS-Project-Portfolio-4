import React from "react";

import Searchs from "../components/Search";

function Search() {

    return (
        <main style={styles.container}>
            <h2 style={styles.body}>This is the Search page!</h2>

            <Searchs style={styles.search} />
        </main>
    );
}

export default Search;

const styles = {
    container: {
        width: '50%',
        backgroundColor: '#FDF5D9',
        margin: '0px auto',
        height: '800px',
    },
    body: {
        textAlign: 'center',
        marginTop: '0',
    },
    search: {
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}