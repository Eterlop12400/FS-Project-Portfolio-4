import React, {useEffect, useState} from 'react';

// Importing Component
import CardHistory from "../components/CardHistory";

function SearchHistory() {

    const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem('cardSearchHistory')) || []);

    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        if (searchHistory.length > 0) {
            setToggle(true);
        } else {
            setToggle(false);
        }
    }, [searchHistory, toggle]);

    // Looping through the items in the searchHistory and making a CardHistory component for each one.
    let history = searchHistory.map((element, i) => {
        return <CardHistory cardName={searchHistory[i].cardName} img={searchHistory[i].cardImg} key={i} />
    });

    return (
        <main className='search-history--main-container'>
            <header style={styles.headerContainer}>
                <h2 style={styles.headerTxt}>Search History</h2>
            </header>

            {/* If we have a search history that is not empty this message will appear */}
            {toggle &&
            <div style={styles.p}>
                <p>
                    Below are the latest unique cards searched (Max 6).
                </p>
            </div>
            }

            {/* If we have a search history that is empty this message will appear */}
            {!toggle &&
            <div style={styles.p}>
                <p>
                    Search History is currently empty, please search for some cards!
                </p>
            </div>
            }

            {/* If we have a search history that is not empty this button will appear */}
            {toggle &&
            <div style={styles.btnContainer}>
                <button style={styles.btn} onClick={clearHistory}>Clear Search History</button>
            </div>
            }

            {/* If we have a search history that is empty this button will appear */}
            {!toggle &&
            <div style={styles.btnContainer}>
                <button style={styles.disabledBtn} disabled>Clear Search History</button>
            </div>
            }

            <section style={styles.contentContainer}>
                {history}
            </section>
        </main>
    );

    /*
    This function will make sure the toggle is true and if it is it will clear the local storage and
    set the search history to a empty array.
     */
    function clearHistory() {
        if (toggle === true) {
            localStorage.clear();
            setSearchHistory([]);
        }
    }
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
    btn: {
        padding: '20px 75px',
        backgroundColor: '#071D3B',
        color: '#FFC300',
        fontSize: '23px',
        fontWeight: '500',
        borderRadius: '4px',
        fontFamily: 'casablanca-urw, sans-serif',
    },
    disabledBtn: {
        padding: '20px 75px',
        backgroundColor: '#3c4e64',
        color: '#FFC300',
        fontSize: '23px',
        fontWeight: '500',
        borderRadius: '4px',
        fontFamily: 'casablanca-urw, sans-serif',
    },
    btnContainer: {
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '50px',
        textAlign: 'center',
    }
}