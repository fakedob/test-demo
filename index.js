const express = require('express');

const app = express()
const port = 3000

// const bodyParser = require('body-parser');
//test
// app.use(bodyParser);

app.post('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})