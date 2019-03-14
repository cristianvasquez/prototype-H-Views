class QueryExecutor {

  //{ type: 'file', value: this.path }
  constructor(sources) {
    this.sources = sources;
    this.engine = null;
  }

  async query(query) {
    if (!this.engine) {
      const newEngine = require('@comunica/actor-init-sparql').newEngine;
      this.engine = newEngine();      
    }

    return this.engine.query(query, bigContext)
      .then(result => {
        return bindingsStreamToGraphQl(result.bindingsStream, bigContext, {materializeRdfJsTerms: true});
      });
  }
}

module.exports = QueryExecutor;
