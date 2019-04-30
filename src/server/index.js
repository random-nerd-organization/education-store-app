const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

const express = require('express');
const os = require('os');

require('./config/database')(config)

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(config.port, () => console.log(`Listening on port ${config.port}!`));
