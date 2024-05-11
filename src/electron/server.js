const express = require('express');
const server = express();
server.use(express.json());

const db = require('./database'); // データベースモジュールのパスを正しく設定

server.get('/messages', (req, res) => {
    db.all("SELECT * FROM messages", [], (err, rows) => {
        if (err) {
            res.status(500).send({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

server.post('/messages', (req, res) => {
    const { content } = req.body;
    db.run("INSERT INTO messages (content) VALUES (?)", [content], function(err) {
        if (err) {
            res.status(500).send({ error: err.message });
            return;
        }
        res.status(201).send({ id: this.lastID });
    });
});

server.listen(3001, () => console.log('Server running on port 3001'));
