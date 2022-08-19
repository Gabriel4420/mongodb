const express = require('express')

const router = express.Router()

const PC = require('../../controllers/ProductController')

router.get('/', PC.showProducts)

router.get('/products/createProduct', PC.createProduct)

router.get('/products/:id', PC.getProduct)

router.get('/products/edit/:id', PC.editProduct)

router.post('/products/saveProduct', PC.saveProduct)

router.post('/products/:id', PC.removeProduct)

router.post('/products/update/:id', PC.updateProduct)

module.exports = router
