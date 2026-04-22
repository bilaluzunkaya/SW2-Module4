'use strict';

const form = document.querySelector('#airport-form');

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const code = document.querySelector('input[name=icao]').value;

    try {
        const response = await fetch(`http://127.0.0.1:5000/airport/${code}`);
        const data = await response.json();

        console.log(data.ICAO, data.Name);
    } catch (error) {
        console.log(error.message);
    }
});