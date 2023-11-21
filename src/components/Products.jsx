import AddProduct from './AddProduct';
import ProductItem from './ProductItem';

function Products() {
  return (
    <div className="mt-12 flex justify-between gap-10">
      <div className="grid grid-cols-3 gap-4">
        <ProductItem />
      </div>
      <AddProduct />
    </div>
  );
}

export default Products;
