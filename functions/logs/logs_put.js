const mongodb = require('../../lib/mongodb')
const util = require('../../lib/util')
const collectionLogs = 'logs'
const { ObjectId } = require('mongodb')

module.exports = async (event) => {
  try {
    await mongodb.connect()

    const logs = {
      id_usuario,
      log,
      datahora
    }

    await mongodb(collectionLogs).updateOne(
      {
        _id: ObjectId(body._id)
      },
      {
        $set: logs
      }
    )
    return util.bind({})
  } catch (error) {
    return util.bind(error)
  }
}