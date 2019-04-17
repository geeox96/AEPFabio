const mongodb = require('../../lib/mongodb')
const util = require('../../lib/util')
const collectionPosts = 'posts'
const { ObjectId } = require('mongodb')

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body._id) return util.bind(new Error('Entre com o ID do post!'))

    await mongodb.connect()

    await mongodb(collectionPosts).removeOne({ _id: ObjectId(body._id) })
    return util.bind({})
  } catch (error) {
    return util.bind(error)
  }
}