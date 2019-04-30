const express = require('express');

const app = express();

app.use(express.static('dist'));
// setup routes
require('./routes')(app);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on port ${process.env.PORT || 8080}!`);
});
