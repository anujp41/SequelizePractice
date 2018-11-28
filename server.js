const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(
    `App listening on PORT:${PORT}
    Currently I do not have any database;
    Check other branches to see database & relations!
    `
  );
});
