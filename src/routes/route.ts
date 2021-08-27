const express = require('express');
var router = express.Router();

let itemController=require('../controllers/ItemController');

router.route('/item').get(itemController.getItems);
router.route('/item/:Id').get(itemController.getItemById);
router.route('/item').post(itemController.postItem);
router.route('/item/:Id').put(itemController.putItem);
router.route('/item/:Id').delete(itemController.deleteItem);




module.exports = router;
  