import React from "react";

import SearchInput from "../components/SearchInput";

function Search() {

    return (
        <main className='search--main-container'>
            <div style={styles.search}>
                <SearchInput />
            </div>
        </main>
    );
}

export default Search;

const styles = {
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