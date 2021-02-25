 // genres  intreface
class genres {
  constructor(db) {
    this.db = db;
  }

  async query(query, genres = []) {
    const [rows, fields] = await this.db.promise().execute(query, genres);
    return rows;
  }
}

module.exports = genres;
