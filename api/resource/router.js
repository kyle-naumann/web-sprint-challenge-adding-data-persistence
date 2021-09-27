const express = require('express');
const Resources = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Resources.findResource()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {

    Resources.createResource(req.body)
        .then(resource => {
            res.json(resource)
        })
        .catch(next)

})

module.exports = router;