const mongodb = require('../../lib/mongodb')
const util = require('../../lib/util')
const { ObjectId } = require('mongodb')
const collectionPosts = 'posts'

module.exports = async (event) => {
  try {
    await mongodb.connect()
    const perPage = 50
    const page = event.queryStringParameters && event.queryStringParameters.page ? event.queryStringParameters.page : 1

    if (event.pathParameters && event.pathParameters.id) {
      const posts = await mongodb(collectionPosts).findOne({ _id: ObjectId(event.pathParameters.id) })
      return util.bind(posts)
    }

    const posts = await mongodb(collectionPosts).find({}).skip(perPage * page - perPage).limit(perPage).toArray()
    return util.bind(posts)
  } catch (error) {
    return util.bind(error)
  }
}