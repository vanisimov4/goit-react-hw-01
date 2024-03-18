import css from "./Profile.module.css";

const Product = ({ name, tag, location, image, stats }) => (
  // console.log(stats);
  <div className={css.wrapper}>
    <div>
      <img src={image} alt="User avatar" />
      <p className={css.name}>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>

    <ul>
      <li>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Product;
