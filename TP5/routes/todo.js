var express = require('express');
var router = express.Router();
var ToDo = require('../controllers/todo')

router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  ToDo.getAllToDos()
    .then(allToDos => {
      res.render('todo', { allToDos: allToDos, d:  data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

router.post('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  ToDo.addToDo(req.body)
    .then(() => {
      ToDo.getAllToDos()
        .then(allToDos => {
          res.render('todo', { allToDos: allToDos, d:  data})
        })
        .catch(err => {
          res.render('error', {error: err})
        })
    })
    .catch((err) => {
      res.render('error', {error: err})
    })
})

router.post('/update', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  ToDo.updateToDo(req.body)
    .then(() => {
      ToDo.getAllToDos()
        .then(allToDos => {
          res.render('todo', { allToDos: allToDos, d:  data})
        })
        .catch(err => {
          res.render('error', {error: err})
        })
    })
    .catch((err) => {
      res.render('error', {error: err})
    })
})

router.post('/delete', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  ToDo.deleteToDo(req.body.id)
    .then(() => {
      ToDo.getAllToDos()
        .then(allToDos => {
          res.render('todo', { allToDos: allToDos, d:  data})
        })
        .catch(err => {
          res.render('error', {error: err})
        })
    })
    .catch((err) => {
      res.render('error', {error: err})
    })
})

module.exports = router