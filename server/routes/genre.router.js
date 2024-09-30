const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/genres', (req, res) => {
  
    const query = `
      SELECT * FROM "genres"
        ORDER BY "name" ASC;
    `; 
    pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);// Add query to get all genres
  res.sendStatus(500)
    })
});

module.exports = router;