import AddProduct from './AddProduct';
import ProductItem from './ProductItem';

function Products() {
  return (
    <div className='mt-12'>
      <div className='flex justify-between items-center'>
        <ProductItem />
        <AddProduct />
      </div>
    </div>
  );
}

export default Products;
