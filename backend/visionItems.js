const express = require('express');
const VisionItem = require('./VisionItem');
const router = express.Router();

router.get('/', async (req, res) => {
  const items = await VisionItem.find();
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = new VisionItem(req.body);
  await item.save();
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await VisionItem.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
});

module.exports = router;
