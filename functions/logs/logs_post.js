const mongodb = require('../../lib/mongodb')
const util = require('../../lib/util')
const collectionLogs = 'logs'

module.exports = async (event) => {
  try {

    await mongodb.connect()

    const posts = {
      id_usuario,
      log,
      datahora
    }

    await mongodb(collectionLogs).insertOne(logs)
    return util.bind({})
  } catch (error) {
    return util.bind(error)
  }
}