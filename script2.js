const fetch = require('node-fetch');

const getPeoplepPromise = fetch => {
    return fetch('https://swapi.co/api/people')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return {
                count: data.count,
                results: data.results
            }
        })
}

const getPeople = async (fetch) => {
    const res = await fetch('https://swapi.co/api/people')
    const data = await res.json()
    console.log(data);
    return {
        count: data.count,
        results: data.results
    }
}

module.exports = { getPeople, getPeoplepPromise }