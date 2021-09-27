const express = require('express')
const Projects = require('./model');
const { convertIntToBool } = require('./project-middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.find()
    .then(projects => {

        projects.forEach(project => {
            if(project.project_completed === 1) {
                project.project_completed = true
            } else {
                project.project_completed = false
            }
        })

        res.json(projects)
    })
    .catch(next)
})

router.get('/:project_id', (req, res, next) => {
    Projects.findById(req.params.project_id)
    .then(project => {

        if(project.project_completed === 1) {
            project.project_completed = true
        } else {
            project.project_completed = false
        }

        res.json(project)
    })
    .catch(next)

})

router.post('/', (req, res, next) => {
    Projects.create(req.body)
        .then(project => {
            res.json(project)
        })
        .catch(next)
})

module.exports = router;