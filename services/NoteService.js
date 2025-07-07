const Note = require('../models/Note');

class NoteService {
  static async createNote(data) {
    return await Note.create(data);
  }
}

module.exports = NoteService;
