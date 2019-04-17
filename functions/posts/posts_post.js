const mongodb = require('../../lib/mongodb')
const util = require('../../lib/util')
const collectionPosts = 'posts'
const collectionUsuarios = 'usuarios'

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.titulo) return util.bind(new Error('Titulo eh obrigatorio'))
    if (!body.img) return util.bind(new Error('Coloque uma imagem!'))

    await mongodb.connect()

    const checkUserExist = await mongodb(collectionUsuarios).findOne({ _id: id_usuario })
    if (checkUserExist) return util.bind(new Error('erro, usuario nao encontrado'))

    const posts = {
      id_usuario,
      titulo: body.titulo,
      img: body.img,
      datahora
    }

    await mongodb(collectionPosts).insertOne(posts)
    return util.bind({})
  } catch (error) {
    return util.bind(error)
  }
}