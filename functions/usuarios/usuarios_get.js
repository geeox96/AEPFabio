const mongodb = require('../../lib/mongodb')
const util = require('../../lib/util')
const { ObjectId } = require('mongodb')
const collectionUsuarios = 'usuarios'

module.exports = async (event) => {
  try {
    await mongodb.connect()
    const perPage = 50
    const page = event.queryStringParameters && event.queryStringParameters.page ? event.queryStringParameters.page : 1

    if (event.pathParameters && event.pathParameters.id) {
      const usuarios = await mongodb(collectionUsuarios).findOne({ _id: ObjectId(event.pathParameters.id) })
      return util.bind(usuarios)
    }

    const usuarios = await mongodb(collectionUsuarios).find({}).skip(perPage * page - perPage).limit(perPage).toArray()
    return util.bind(usuarios)
  } catch (error) {
    return util.bind(error)
  }
}