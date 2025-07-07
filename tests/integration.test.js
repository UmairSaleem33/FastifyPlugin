const fastify = require('fastify')();
const modNotes = require('../index');
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL);
  fastify.register(modNotes);
  await fastify.ready();
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
  await fastify.close();
});

test('POST /notes + GET /notes', async () => {
  const note = { title: 'Hello', body: 'World' };
  const postRes = await fastify.inject({ method: 'POST', url: '/notes', payload: note });
  expect(postRes.statusCode).toBe(201);
  const getRes = await fastify.inject({ method: 'GET', url: '/notes' });
  const notes = JSON.parse(getRes.payload);
  expect(notes.length).toBeGreaterThan(0);
});
