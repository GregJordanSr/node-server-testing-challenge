
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Greg'},
        {id: 2, name: 'Shelleish'},
        {id: 3, name: 'Jamyla'}
      ]);
    });
};
