import React from "react";

function Home() {

    return (
        <main style={styles.container}>
            <h1 style={styles.body}>This is the Home page!</h1>
        </main>
    );
}

export default Home;

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
}