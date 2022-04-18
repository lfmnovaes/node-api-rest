import express from 'express';
import Product from '../controllers/product';
const router = express.Router();
router.get('/product', Product.index);
router.post('/product', Product.create);
router.put('/product/:id', Product.update);
router.delete('/product/:id', Product.delete);
export default router;
