const express = require('express')
const router = express.Router();
const  {addProduct,getById,updateProduct,deleteProduct}  = require('../controllers/product')


router.post('/addProduct',addProduct)
router.get('/getById/:id',getById)
router.patch('/patch/:id',updateProduct)
router.delete('/removeProduct/:id',deleteProduct)



module.exports = router;