import Sequelize from 'sequelize'

import User from '../app/models/User'
import Product from '../app/models/Product'
import Category from '../app/models/Category'

import configDataBase from '../config/database'

const models = [User, Product, Category]
class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(configDataBase)
        models.map((model) => model.init(this.connection))
    }
}

export default new Database()