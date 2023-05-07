import fetch from 'node-fetch';
import fs from 'fs';

const pokemonResult = fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
        return response.json()
    })
    .then(data => {
        const fetchPromises = data.results.map(pokemon => {
            return fetch(pokemon.url).then(pokeRes => {
                return pokeRes.json()
            })
        })
        return Promise.all(fetchPromises)
    })
    .then((result) => {
        const htmlStr = result.reduce((acc, e) => {
            return `${acc}<div><p>${e.name}</p><img src="${e.sprites.front_default}"/></div>`
        }, '');
        fs.writeFile('9.html', htmlStr, () => {
            console.log('File saved successfully!');
        })
    })
    .catch(err => { console.log(err) });
