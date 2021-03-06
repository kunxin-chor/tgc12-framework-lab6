const bookshelf = require('../bookshelf')

// create a new model named Product ( first argument of the model function)
// and map it to the products table in the databse
const Product = bookshelf.model('Product', {
    'tableName': 'products', // <-- refers to the products table in the database 
    category() {
        return this.belongsTo('Category')
    },
    tags() {
        return this.belongsToMany('Tag')
    }
})

const Tag = bookshelf.model('Tag', {
    'tableName':'tags',
    products() {
        return this.belongsToMany('Product')
    }
})

// create a new model named Categories
// and associate with the categories table in the database
const Category = bookshelf.model('Category',{
    'tableName': 'categories',
    products() {
        return this.hasMany('Product')
    }
})

module.exports = { Product, Category, Tag };