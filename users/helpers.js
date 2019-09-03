const db = require('../database/dbConfig.js');

module.exports = {
  insert,
  remove,
  getAll
};

function insert(user) {
  return db('users')
    .insert(user)
    .then(ids => ({ id: ids[0]}))
}

function remove(id) {
  return db('users')
    .delete()
    .where({ id: id})
    
}

function getAll() {
  return db('users');
}
