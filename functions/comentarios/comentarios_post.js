const mongodb = require('../../lib/mongodb')
const util = require('../../lib/util')
const collectionComentarios = 'comentarios'

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.comentario) return util.bind(new Error('Faca seu comentario !'))


    await mongodb.connect()

    const comentarios = {
      id_usuario,
      id_posts,
      comentario: body.comentario,
      datahora
    }

    await mongodb(collectionComentarios).insertOne(comentarios)
    return util.bind({})
  } catch (error) {
    return util.bind(error)
  }
}