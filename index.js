const express = require('express')
const request = require('request')

const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/count',(req,res)=>request('https://gateway.gofundme.com/web-gateway/v1/feed/matt-waldens-hurricane-ian-relief-fund/counts').pipe(res))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
