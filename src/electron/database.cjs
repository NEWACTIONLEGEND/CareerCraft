const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// データベースファイルのパスを設定
const dbPath = path.resolve(__dirname, 'app.db');
const db = new sqlite3.Database(dbPath);

// テーブルが存在しない場合は作成
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT)");
});

module.exports = db;
