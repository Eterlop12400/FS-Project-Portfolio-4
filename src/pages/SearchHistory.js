import React from "react";

// React Component

function SearchHistory() {

    return (
        <main style={styles.container}>
            <h2 style={styles.body}>This is the Search History page!</h2>
        </main>
    );
}

export default SearchHistory;

const styles = {
    container: {
        width: '75%',
        backgroundColor: '#FDF5D9',
        margin: '0px auto',
        height: '800px',
    },
    body: {
        textAlign: 'center',
        marginTop: '0',
    },
}