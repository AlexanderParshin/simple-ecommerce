import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

import config from './config'
import Html from '../client/html'

const Root = () => ''


const MONGO_URL = `mongodb+srv://${process.env.LOGIN_BD}:${process.env.PASSWORD_BD}@cluster0.tmhus.mongodb.net/simple_ecommerce?retryWrites=true&w=majority`
console.log('MONGO_URL: ', MONGO_URL)


mongoose.connect(MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

const productSchema = new mongoose.Schema({
  id: String,
  title: String,
  image: String,
  price: Number,
  description: String
})

const Products = mongoose.model('products', productSchema)

try {
  console.log(Root)
} catch (ex) {
  console.log(' run yarn build:prod to enable ssr')
}

let connections = []

const port = process.env.PORT || 8091
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))


const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Tasks meneger'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/api/v1/products', async (req, res) => {
  const productsSend = await Products.find({})
  console.log('productsSend: ', productsSend)
  res.send(productsSend)
})

server.post('/api/v1/products/listId', async (req, res) => {
  const listId = await req.body
  console.log('listId: ', listId)
  const productsSend = await Products.find({})
  console.log('productsSend: ', productsSend)
  res.send(productsSend)
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})
    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
