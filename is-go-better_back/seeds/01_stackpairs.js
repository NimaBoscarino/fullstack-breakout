
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stack_pairs').del()
    .then(function () {
      // Inserts seed entries
      return knex('stack_pairs').insert([
        {id: 1, stack_a: 'Go', stack_b: 'Rails', stack_a_score: 5, stack_b_score: 10},
        {id: 2, stack_a: 'Rails', stack_b: 'Rust', stack_a_score: 15, stack_b_score: 1},
        {id: 3, stack_a: 'Node', stack_b: 'Rails', stack_a_score: 2, stack_b_score: 12},
        {id: 4, stack_a: 'Go', stack_b: 'Node', stack_a_score: 14, stack_b_score: 0},
      ]);
    });
};
