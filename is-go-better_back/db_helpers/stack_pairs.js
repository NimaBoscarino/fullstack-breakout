const config = require('../knexfile')['development'];
const knex = require('knex')(config);

// fetch all stack pairs
const fetchAllStackPairs = () => {
    return knex.select().table('stack_pairs')
}

module.exports = {
    fetchAllStackPairs
}