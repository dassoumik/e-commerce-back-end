// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');



// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
  as: 'productCategory',
  onDelete: 'SET NULL',
});

// Products have one Category
Product.hasOne(Category, {
  foreignKey: 'id',
  as: 'productCategory',
})


// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
