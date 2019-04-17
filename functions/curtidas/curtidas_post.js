const mongodb = require('../../lib/mongodb')
const util = require('../../lib/util')
const collectionCurtidas = 'curtidas'

module.exports = async (event) => {
  try {

    await mongodb.connect()

    const curtidas = {
      id_usuario,
      id_post,
      datahora
    }

    await mongodb(collectionCurtidas).insertOne(curtidas)
    return util.bind({})
  } catch (error) {
    return util.bind(error)
  }
}