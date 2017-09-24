const router = require('express').Router()
const { Adventure, Passage, Link } = require('../db/models')
module.exports = router

router.get('/:id', (req, res, next) => {
  Passage.findOne({ where: { id: Number(req.params.id) }, include: [{ model: Link, foreignKey: 'fromPassageId' }] })
    .then((passage) => {
      if (!passage) res.status(404).send('No such passage');
      else res.json(passage)
    })
    .catch(next)
});


router.post('/:adventureId', (req, res, next) => {
  Passage.create(req.body)
    .then(passage => {
      req.json(passage);
    })
    .catch(next)
});

//the route to get all passages for an adventure is in the adventure router
