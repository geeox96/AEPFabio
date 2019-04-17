const mongodb = require('../../lib/mongodb')
const util = require('../../lib/util')
const collectionUsuarios = 'usuarios'

module.exports = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    if (!body.name) return util.bind(new Error('Entre com seu nome!'))
    if (!body.email) return util.bind(new Error('Entre com seu e-mail!'))
    if (!body.senha) return util.bind(new Error('Entre com uma senha!'))

    await mongodb.connect()

    const checkUserExist = await mongodb(collectionUsuarios).findOne({ email: body.email })
    if (checkUserExist) return util.bind(new Error('Esse e-mail ja esta sendo usado'))

    const usuarios = {
      name: body.name,
      email: body.email,
      senha: body.senha,
      last_login,
      datahora,
      TOKEN
    }

    await mongodb(collectionUsuarios).insertOne(usuario)
    return util.bind({})
  } catch (error) {
    return util.bind(error)
  }
}