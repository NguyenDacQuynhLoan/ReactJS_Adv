var express = require('express');
var router = express.Router();

var data =require('../data/data.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-type','application/json')
  res.status(200).json(data)
  console.log(data);
  res.end('hello')
});

/* GET BY ID */
router.get('/:id', function(req, res, next) {
  res.setHeader('Content-type','application/json')
  res.status(200).json(data.filter(item => item.id == req.params['id']))
})

/* POST */
router.post('/', function(req, res, next) {
  res.setHeader('Content-type','application/json')
  res.status(200).end('POST')
})

/* PUT */
router.put('/', function(req, res, next) {
  res.setHeader('Content-type','application/json')
  res.status(200).end('PUT')
})

/* DELETE */
router.delete('/', function(req, res, next) {
  res.setHeader('Content-type','application/json')
  res.status(200).json('DELETE')
})

module.exports = router;
