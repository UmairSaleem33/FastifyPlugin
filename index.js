const fp = require('fastify-plugin');
const noteRoutes = require('./routes/noteRoutes');

async function modNotes(fastify, opts) {
  fastify.register(noteRoutes, { prefix: '/notes' });
}

module.exports = fp(modNotes);
