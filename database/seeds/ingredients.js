
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, description: 'one chilled egg', recipeId: '1'},
        {id: 2, description: 'a pinch of salt', recipeId: '1'},
        {id: 3, description: 'a pinch of pepper', recipeId: '1'}
      ]);
    });
};
