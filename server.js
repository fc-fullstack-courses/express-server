const express = require('express');

const app = express();

const PORT = 5000;

app.get('/users', (req, res) => {
  res.send([{ id: 1 }, { id: 2 }]);
});

/*
app.post
app.put
app.patch
app.delete
*/

app.listen(PORT);
