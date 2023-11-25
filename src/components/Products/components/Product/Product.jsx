import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import './styles.scss';

const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="container">
        <div className="circle"></div>
        <img src={item.img} className="image" />
        <div className="info">
          <div className="icon">
            <ShoppingCartOutlined />
          </div>
          <div className="icon">
            <SearchOutlined />
          </div>
          <div className="icon">
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
