const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('dist'));

app.use(bodyParser.json({ limit: '10mb' }));

// setup routes
require('./routes')(app);

// setup database
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
require('./config/database')(config)

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}!`);
});

