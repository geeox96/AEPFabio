const mongodb = require('../../lib/mongodb')
const util = require('../../lib/util')
const { ObjectId } = require('mongodb')
const collectionLogs = 'logs'

module.exports = async (event) => {
  try {
    await mongodb.connect()
    const perPage = 50
    const page = event.queryStringParameters && event.queryStringParameters.page ? event.queryStringParameters.page : 1

    if (event.pathParameters && event.pathParameters.id) {
      const logs = await mongodb(collectionLogs).findOne({ _id: ObjectId(event.pathParameters.id) })
      return util.bind(logs)
    }

    const plogsosts = await mongodb(collectionLogs).find({}).skip(perPage * page - perPage).limit(perPage).toArray()
    return util.bind(logs)
  } catch (error) {
    return util.bind(error)
  }
}