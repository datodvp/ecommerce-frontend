import './styles.scss';
import { categories } from '../../data';
import CategoryItem from './components/CategoryItem/CategoryItem';

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
