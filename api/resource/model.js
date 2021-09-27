const db = require('../../data/dbConfig')

const findResource = () => {
    return db('resources')
}

const findById = async (resource_id) => {
    const resource = await db('resources').where({ resource_id }).first()

    return resource
}

const createResource = async (newResource) => {
    const [resource_id] = await db('resources').insert(newResource)

    return findById(resource_id)
}

module.exports = {
    findResource,
    findById,
    createResource
}
