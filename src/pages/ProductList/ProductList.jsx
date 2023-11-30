import './styles.scss'
import Navbar from '../../components/Navbar'
import Announcement from '../../components/Accouncement'


const ProductList = () => {
  return (
    <div className='product-list'>
      <div className="container">
      <Navbar />
        <Announcement />
        <h1 className="title">Dresses</h1>
          <div className="filter-container">
            <div className="filter">
              <span className="filter-text">Filter products:</span>
              <select>
                <option disabled selected>Color</option>
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Green</option>
              </select>
              <select>
                <option disabled selected>Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div className="filter">
              <span className="filter-text">Sort Products:</span>
              <select name="" id="">
                <option>Price (asc)</option>
                <option>Price (desc)</option>
              </select>
            </div>
        </div>
      {/* PRODUCTS SHOULD BE THERE */}
      </div>
    </div>
  )
}

export default ProductList;