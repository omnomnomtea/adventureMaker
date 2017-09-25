const router = require('express').Router()
const { Adventure, Link, Passage } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Adventure.findAll({})
    .then(adventures => res.json(adventures))
    .catch(next)
})

router.post('/', (req, res, next) => {
  req.body.ownerId = req.user.id;
  Adventure.create(req.body)
    .then(adventure => res.json(adventure))
    .catch(next)
})

router.get('/passages/:id', (req, res, next) => {
  Adventure.findById(Number(req.params.id))
    .then((adventure) => {
      if (!adventure) res.status(404).send('no such adventure')
      else return Passage.findAll( {where: {adventureId: Number(req.params.id)}, include: [{model: Link, as: 'fromPassage'}]})
    })
    .then(passages => res.send(passages))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Adventure.findById(Number(req.params.id))
    .then((adventure) => {
      if (!adventure) res.status(404).send('no such adventure');
      else res.json(adventure);
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  req.body.ownerId = req.user.id;
  Adventure.findById(Number(req.params.id))
    .then(adventure => {
      if (!adventure) res.status(404).send('no such adventure');
      else return adventure.update(req.body)
    })
    .then(adventure => res.json(adventure))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Adventure.findById(Number(req.params.id))
    .then(adventure => {
      if (!adventure) res.status(404).send('no such adventure')
      else return adventure.delete(req.body)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})
