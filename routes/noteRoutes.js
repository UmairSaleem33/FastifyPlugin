const NoteService = require('../services/NoteService');
const Note = require('../models/Note');

async function routes(fastify, options) {
  fastify.post('/', async (request, reply) => {
    const note = await NoteService.createNote(request.body);
    reply.code(201).send(note);
  });

  fastify.get('/', async (request, reply) => {
    const notes = await Note.find({});
    reply.send(notes);
  });

  fastify.get('/:id', async (request, reply) => {
    const note = await Note.findById(request.params.id);
    if (!note) return reply.code(404).send({ message: 'Note not found' });
    reply.send(note);
  });

  fastify.get('/search', async (request, reply) => {
    const { q } = request.query;
    const results = await Note.find({
      $text: { $search: q }
    });
    reply.send(results);
  });
}

module.exports = routes;
