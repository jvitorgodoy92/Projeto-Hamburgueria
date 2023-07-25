// const { Router } = require("express")
import { Router } from 'express'
import multer from 'multer'
import multerConfing from './config/multer'


import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import ProductController from './app/controllers/ProductController'
import CategoryController from './app/controllers/CategoryController'

import authMiddwares from './app/middlewares/auth'

const upload = multer(multerConfing)

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddwares) // será chamado por todas as rotas abaixo

routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products',  ProductController.index)

routes.post('/categories', CategoryController.store)
routes.get('/categories',  CategoryController.index)

// module.exports = routes
export default routes
