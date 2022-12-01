const fastify = require('fastify')({ logger: true })
fastify.register(require('./routes/items'))
fastify.register(require('@fastify/swagger'), {
  swagger: {
    info: {
      title: 'fastify-api',
      version: '0.1.0'
    },
  }
})
fastify.register(require("@fastify/swagger-ui"), {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
});
const PORT = 5000
        
const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' })
    // await fastify.ready()
    // fastify.swagger()
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
