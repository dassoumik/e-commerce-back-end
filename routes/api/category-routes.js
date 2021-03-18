const router = require('express').Router();
const { Category, Product } = require('../../models');
const { sequelize } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    
    const categoryAllData  = await Category.findAll({
      include:[{model: Product, as: 'productCategory'}],
    });
    res.status(200).json(categoryAllData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    
    const categoryIdData  = await Category.findByPk(req.params.id, {
      include:[{model: Product, as: 'productCategory'}],
    });
    res.status(200).json(categoryIdData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
