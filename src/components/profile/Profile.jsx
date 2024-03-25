import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => (
  <div className={css.wrapper}>
    <div>
      <img className={css.avatar} src={image} alt="User avatar" />
      <p className={css.name}>{name}</p>
      <p className={css.userdata}>@{tag}</p>
      <p className={css.userdata}>{location}</p>
    </div>

    <ul>
      <li>
        <span>Followers</span>
        <span className={css.value}>{stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span className={css.value}>{stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span className={css.value}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;
