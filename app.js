// const express = require('express');
// const app = express()

// app.get('/', function (req, res) {
//     res.send('Hello world !!!')
// })
  
// app.listen(3000, function () {
//     console.log('Example app listenning on port 3000')
// })

const fs = require('fs')
const http = require('http')


function utile() {
    console.log(utile);

    module.exports = {
        config: 123,
        utile: utile,
    }
}