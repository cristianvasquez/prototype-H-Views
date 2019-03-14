const express = require('express');
const newEngine = require('@comunica/actor-init-sparql').newEngine;

const app = express();
const port = 3000;
const engine = newEngine();

app.use(express.static('public'));



const sources = [
    { type: 'hypermedia', value: 'http://fragments.dbpedia.org/2016-04/en' },
    { type: 'hypermedia', value: 'http://data.linkeddatafragments.org/viaf' },
    { type: 'hypermedia', value: 'http://data.linkeddatafragments.org/harvard' }
];






app.listen(port, () => console.log(`Listening on port ${port}!`));
