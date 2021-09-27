const db = require('../../data/dbConfig')

const findProject = () => {
    return db("projects")
}

const findById = async project_id => {

    const project = await db('projects').where({ project_id }).first()

    if(project.project_completed === 1) {
        project.project_completed = true
    } else {
        project.project_completed = false
    }

    return project
}

const createProject = async (newProject) => {

    if(newProject.project_completed === true || newProject.project_completed === 1) {
        newProject.project_completed = 1
    } else {
        newProject.project_completed = 0
    }

    const [project_id] = await db("projects").insert(newProject)

    return findById(project_id)
}

module.exports = {
    findProject,
    findById,
    createProject
}
