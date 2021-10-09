import React, {useState} from "react";

import CardHistory from "../components/CardHistory";

function SearchHistory() {

    const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem('cardSearchHistory')) || []);

    let history = searchHistory.map((element, i) => {
        return <CardHistory cardName={searchHistory[i].cardName} img={searchHistory[i].cardImg} key={i} />
    })

    return (
        <main style={styles.container}>
            <header style={styles.headerContainer}>
                <h2 style={styles.headerTxt}>Search History</h2>
            </header>

            <div style={styles.p}>
                <p>
                    Below are the latest unique cards searched (Max 6).
                </p>
            </div>

            <section style={styles.contentContainer}>
                {history}
            </section>
        </main>
    );
}

export default SearchHistory;

const styles = {
    container: {
        width: '75%',
        backgroundColor: '#FDF5D9',
        margin: '0px auto',
        minHeight: '800px',
        height: 'auto',
        fontFamily: 'casablanca-urw, sans-serif',
    },
    headerTxt: {
        textAlign: 'center',
        marginTop: '0',
        fontWeight: '500',
        fontSize: '32px',
        color: '#071D3B',
    },
    p: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '50px',
        textAlign: 'center',
        fontWeight: '300',
        fontSize: '18px',
        color: '#4E574F',
    },
    contentContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    headerContainer: {
        paddingTop: '50px',
    },
}