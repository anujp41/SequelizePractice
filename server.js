const express = require('express');
const app = express();
const PORT = 8000;

const db = require('./model').db;

const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`App listening on PORT:${PORT}`);
  // db.sync({ force: true })
  db.sync()
    .then(() => console.log('Database is synched!'))
    .catch(err => console.error('Trouble in lala land ', err.stack));
});
