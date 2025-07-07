const NoteService = require('../services/NoteService');
const Note = require('../models/Note');

jest.mock('../models/Note');

test('createNote should save note', async () => {
  const data = { title: 'Test', body: 'Content' };
  Note.create.mockResolvedValue(data);
  const result = await NoteService.createNote(data);
  expect(result).toEqual(data);
});
