// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// User.hasMany(Post, {as: 'Posts'});
// Post.hasOne(User, {as: 'owner'});


// Product.belongsToMany(Category,{through:foreignKey,'product_id'});
// Category.belongsToMany(Product,{throughforeignKey:'category_id'});

// this.belongsTo(models.Vehicle, {
//   foreignKey: 'vehicleName',
//   as: 'defaultVehicle'

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id',
});

// // Products belongToMany Tags (through ProductTag)
// Product.belongsTo(Tag, {
//   foreignKey: 'product_id', 
// });

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   foreignKey: 'tag_id',
// });

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};
