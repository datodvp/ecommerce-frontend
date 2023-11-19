import { Badge } from '@mui/material';
import './styles.scss';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <span className="language">EN</span>
            <div className="search-container">
              <input type="text" className="input" />
              <Search style={{ color: 'gray', fontSize: 16 }} />
            </div>
          </div>

          <div className="center">
            <h1 className="logo">Eco.</h1>
          </div>

          <div className="right">
            <div className="menu-item">REGISTER</div>
            <div className="menu-item">SIGN IN</div>
            <div className="menu-item">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
