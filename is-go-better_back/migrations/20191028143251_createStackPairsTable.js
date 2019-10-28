exports.up = function(knex) {
    return knex.schema
      .createTable('stack_pairs', function (table) {
         table.increments('id');
         table.string('stack_a', 255).notNullable();
         table.string('stack_b', 255).notNullable();
         table.integer('stack_a_score')
         table.integer('stack_b_score')         
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("stack_pairs")
  };
  
  