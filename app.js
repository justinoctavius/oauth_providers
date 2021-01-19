require('dotenv').config();

const express = require('express');
const app = express();
const serverConfig = require('./config/serverConfig');

//configuring the server
serverConfig(app);
//configuring the passport
require('./config/passport_config/passportSetup');
require('./database');
//running the server
app.listen(3000, () => {
  console.log('server listening on port 3000');
});
