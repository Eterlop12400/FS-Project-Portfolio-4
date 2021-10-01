import React, {useEffect, useState} from 'react';
import Card from './Card';

function API(props) {

    // Setting up our state and leaving it null when we load the page.
    const [pokemonNameAndImage, setPokemonNameAndImage] = useState(null);
    const [pokemonDescription, setPokemonDescription] = useState(null);

    // Setting the url for our API call based on the props being passed in from Search.js.
    let urlForNameAndImage = `https://pokeapi.co/api/v2/pokemon/${props.url}`;
    let urlForDescription = `https://pokeapi.co/api/v2/pokemon-species/${props.url}`;


    // Using fetch, async, and await to get our API information. We are calling the function below.
    useEffect(() => {
        async function fetchAPI() {

            // We will not call the API if the value is null like it is on the initial page load.
            if (props.url !== null) {
                const responseForNameAndImage = await fetch(urlForNameAndImage);
                const responseForDescription = await fetch(urlForDescription);

                document.querySelector('.error-msg').innerText = '';

                // We will check the response status of our fetch call, if we get a 404 error an error message will appear.
                if (responseForNameAndImage.status === 404 || responseForDescription.status === 404) {
                    document.querySelector('.error-msg').innerText = 'That Pokemon does not exist, try again!';
                } else {
                    const nameAndImageData = await responseForNameAndImage.json();
                    const descriptionData = await responseForDescription.json();
                    let description = [];
                    let nameAndImage = [];

                    nameAndImage = nameAndImageData;
                    description = descriptionData

                    setPokemonNameAndImage(nameAndImage);
                    setPokemonDescription(description);
                }
            }
        }
        fetchAPI();
    }, [urlForNameAndImage, urlForDescription, props.url]);

    return (
        <div>
            <Card
                name={pokemonNameAndImage && pokemonNameAndImage.species.name ? pokemonNameAndImage.species.name : ""}
                image={pokemonNameAndImage && pokemonNameAndImage.sprites.front_default ? pokemonNameAndImage.sprites.front_default : ''}
                description={pokemonDescription && pokemonDescription.flavor_text_entries[0].flavor_text ? pokemonDescription.flavor_text_entries[0].flavor_text : ""}
            />
            <p className='error-msg'>Please Enter A Pokemon Name. ex. charmander</p>
        </div>
    );
}

export default API;
