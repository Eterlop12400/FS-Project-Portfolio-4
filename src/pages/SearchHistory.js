import React, {useState} from "react";

import CardHistory from "../components/CardHistory";

function SearchHistory() {

    const [searchHistory] = useState(JSON.parse(localStorage.getItem('cardSearchHistory')) || []);

    // Looping through the items in the searchHistory and making a CardHistory component for each one.
    let history = searchHistory.map((element, i) => {
        return <CardHistory cardName={searchHistory[i].cardName} img={searchHistory[i].cardImg} key={i} />
    })

    return (
        <main className='search-history--main-container'>
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

// CSS Modules
const styles = {
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
        justifyContent: 'space-evenly',
    },
    headerContainer: {
        paddingTop: '50px',
    },
}