import './styles.scss';

const CategoryItem = ({ item }) => {
  return (
    <div className="category-item">
      <div className="container">
        <img src={item.img} className="image" />
        <div className="info">
          <h1 className="title">{item.title}</h1>
          <button className="button">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
