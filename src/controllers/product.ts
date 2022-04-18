const products: any = [];
let id = 0;
const productControllers = {
  index(req: any, res: any) {
    res.status(200).json({ status: 'success', data: { products } });
  },
  create(req: any, res: any) {
    id++;
    const product = {
      id,
      name: req.body.name,
      price: req.body.price,
    };
    products.push(product);
    console.log('products', products);
    res.status(200).json({ status: 'success', message: 'Product created' });
  },
  update(req: any, res: any) {
    const { id } = req.params;
    const { name, price } = req.body;
    const product = products.find((product: any) => product.id == id);
    if (product) {
      product.name = name;
      product.price = price;
    }
    console.log('products', products);
    res.status(200).json({ status: 'success', message: 'Product updated' });
  },
  delete(req: any, res: any) {
    const { id } = req.params;
    const product = products.find((product: any) => product.id == id);
    if (product) {
      products.splice(products.indexOf(product), 1);
    }
    console.log(products);
    res.status(200).json({ status: 'success', message: 'Product deleted' });
  },
};
export default productControllers;
