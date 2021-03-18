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

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryUpdateData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then(categoryUpdateData => {
    if (!categoryUpdateData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryUpdateData);});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
