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
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'productTags'
});

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
