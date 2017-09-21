const router = require('express').Router()
const { Passage, Link } = require('../db/models')
module.exports = router

router.get('/:id', (req, res, next) => {
  Passage.findById(Number(req.params.id), {include: [Link]})
    .then(passage => res.json(passage))
    .catch(next)
});

