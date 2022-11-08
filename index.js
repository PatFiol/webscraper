const PORT = 5050
const axios = require('axios').default;
const express = require('express')
const cheerio = require('cheerio');


const app = express()


app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))