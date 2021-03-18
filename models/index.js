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
  constraints: false, 
  // allowNull:true, 
  // defaultValue:null
});

// Products have one Category
Product.hasOne(Category, {
  foreignKey: 'id',
  as: 'productCategory',
  constraints: false, 
  // allowNull:true, 
 // defaultValue: null
})


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    foreignKey: 'tag_id',
    foreignKey: 'product_id',
    unique: false,
    // onDelete: 'CASCADE',
  },
  as: 'productTags'
});

// 

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
    // onDelete: 'CASCADE',
  },
  as: 'productTags'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
