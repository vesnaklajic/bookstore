 // genres  intreface
class Genre {
  constructor(db) {
    this.db = db;
  }
  async query(query, genre = []) {
    const [rows, fields] = await this.db.promise().execute(query, genre);
    return rows;
  }
}

module.exports = Genre;
