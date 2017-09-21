const router = require('express').Router()
const {Adventure, Passage } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Adventure.findAll({})
    .then(adventures => res.json(adventures))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Adventure.findById(Number(req.params.id))
  .then(adventure => adventure.getPassages())
  .catch(next)
})

router.get('/passages/:id', (req, res, next) => {
  Adventure.findById(Number(req.params.id))
  .then(adventure => adventure.getPassages())
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  Adventure.findById(Number(req.params.id))
    .then(adventure => res.json(adventure))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Adventure.findById(Number(req.params.id))
  .then( adventure => adventure.update(req.body))
  .then(adventure => res.json(adventure))
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Adventure.findById(Number(req.params.id))
  .then( adventure => adventure.delete(req.body))
  .then( () => res.sendStatus(204))
  .catch(next)
})
