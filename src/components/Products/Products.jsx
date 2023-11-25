import './styles.scss';
import { popularProducts } from '../../data';
import Product from './components/Product/Product';

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
