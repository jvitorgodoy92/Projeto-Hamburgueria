// const express = require("express")
import express from 'express'

// const routes = require("./routes")
import routes from './routes'

import { resolve } from 'path'

import './database'

class App {
  constructor() {
    this.app = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')))
  }

  routes() {
    this.app.use(routes)
  }
}

// module.exports = new App().app
export default new App().app
