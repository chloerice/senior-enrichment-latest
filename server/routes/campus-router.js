'use strict'

const router = require('express').Router()
const db = require('../db')
const Campus = db.model('campus')
const Student = db.model('student')
const Promise = require('bluebird')

router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campusArr => res.send(campusArr))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(newCampus => res.status(201).send(newCampus))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
  .then(campus => res.send(campus))
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
  .then(campus => {
    return campus.update(req.body)
  })
  .then(updatedCampus => res.send(updatedCampus))
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Campus.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deletedCampus => res.sendStatus(204))
  .catch(next)
})

module.exports = router
