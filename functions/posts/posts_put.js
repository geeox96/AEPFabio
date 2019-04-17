const mongodb = require('../../lib/mongodb')
const util = require('../../lib/util')
const collectionPosts = 'posts'
const { ObjectId } = require('mongodb')

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.titulo) return util.bind(new Error('Titulo eh obrigatorio'))
    if (!body.img) return util.bind(new Error('Coloque uma imagem!'))

    await mongodb.connect()

    const posts = {
      id_usuario,
      titulo: body.titulo,
      img: body.img,
      datahora
    }

    await mongodb(collectionPosts).updateOne(
      {
        _id: ObjectId(body._id)
      },
      {
        $set: posts
      }
    )
    return util.bind({})
  } catch (error) {
    return util.bind(error)
  }
}