const mongoose = require('mongoose');

const uri = process.env.DATABASE_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('error', err));

module.exports = mongoose;
