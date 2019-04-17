const mongodb = require('../../lib/mongodb')
const util = require('../../lib/util')
const { ObjectId } = require('mongodb')
const collectionCurtidas = 'curtidas'

module.exports = async (event) => {
  try {
    await mongodb.connect()
    const perPage = 50
    const page = event.queryStringParameters && event.queryStringParameters.page ? event.queryStringParameters.page : 1

    if (event.pathParameters && event.pathParameters.id) {
      const curtidas = await mongodb(collectionCurtidas).findOne({ _id: ObjectId(event.pathParameters.id) })
      return util.bind(curtidas)
    }

    const curtidas = await mongodb(collectionCurtidas).find({}).skip(perPage * page - perPage).limit(perPage).toArray()
    return util.bind(curtidas)
  } catch (error) {
    return util.bind(error)
  }
}