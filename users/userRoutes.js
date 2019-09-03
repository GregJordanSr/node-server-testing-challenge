const router = require('express').Router();

const users = require('../users/helpers.js');

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users.remove(id)
        .then((data) => {
            res.status(200).json({message: "User deleted "});
        }).catch((err) => {
            res.status(500).json({ message: "Failed to delete user." });
        });
    
  });

router.get('/users', (req, res) => {
    users.getAll()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  router.post('/users/register', (req, res) => {

    users.insert(req.body)
      .then(result => {
        res.status(201).json(result);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  module.exports = router;