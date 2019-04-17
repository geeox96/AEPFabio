const mongodb = require('../../lib/mongodb')
const util = require('../../lib/util')
const { ObjectId } = require('mongodb')
const collectionComentarios = 'comentarios'

module.exports = async (event) => {
  try {
    await mongodb.connect()
    const perPage = 20
    const page = event.queryStringParameters && event.queryStringParameters.page ? event.queryStringParameters.page : 1

    if (event.pathParameters && event.pathParameters.id) {
      const comentarios = await mongodb(collectionComentarios).findOne({ _id: ObjectId(event.pathParameters.id) })
      return util.bind(comentarios)
    }

    const comentarios = await mongodb(collectionComentarios).find({}).skip(perPage * page - perPage).limit(perPage).toArray()
    return util.bind(comentarios)
  } catch (error) {
    return util.bind(error)
  }
}