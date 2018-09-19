const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({
  port: 3000,
  host: '127.0.0.1'
})

const init = async () => {
  server.route([
    {
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        reply('hello world')
      }
    }
  ])
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()
