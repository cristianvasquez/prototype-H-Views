/**
 * author: Pieter Heyvaert (pheyvaer.heyvaert@ugent.be)
 * Ghent University - imec - IDLab
 */

const assert = require('assert');
const lib = require('../index');

describe('QueryExecutor', function() {
  this.timeout(5000);

  it('basic', async () => {
    /**
    const result = await lib.query('test/test.ttl', {
      name: 'http://schema.org/name'
    }, '{ name }');
   */
    //assert.deepStrictEqual(result, [{name: ['Test']}]);
  });
});

describe('MyMocha', function () {
  this.timeout(5000);

  it('basic', async () => {
    const sources = [{
        type: 'hypermedia',
        value: 'http://fragments.dbpedia.org/2016-04/en'
      },
      {
        type: 'hypermedia',
        value: 'http://data.linkeddatafragments.org/viaf'
      },
      {
        type: 'hypermedia',
        value: 'http://data.linkeddatafragments.org/harvard'
      }
    ];
    const query = `
        SELECT ?s ?p ?o
        { 
            ?s ?p ?o
        } LIMIT 10
    `;
    const newEngine = require('@comunica/actor-init-sparql').newEngine;
    const engine = newEngine();


    // const result = await engine.query(query, {
    //       sources: sources 
    // });
    // console.log(result);
    engine.query(query, {
      sources: sources
    }).then(result => {
      console.log(`START`);
      result.bindingsStream.on('data', data => {
        // console.log(`${data.get('?s').value} ${data.get('?p').value} ${data.get('?o').value}\n`);
        console.log(data.toObject());

      });
      result.bindingsStream.on('end', () => console.log('END!'));
    });

  });
});



