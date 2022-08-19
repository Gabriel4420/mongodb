const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017/testemongodb'

const client = new MongoClient(uri);(async () => {
  try {
    await client.connect()
    console.log('Conectando ao mongo')
  } catch (error) {
    console.log(error)
  }
})()

module.exports = client
