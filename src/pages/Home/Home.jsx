import Announcement from '../../components/Accouncement';
import Categories from '../../components/Categories/Categories';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products/Products';
import Slider from '../../components/Slider';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
