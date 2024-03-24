import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? 'Online' : 'Offline';
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={css[status.toLowerCase()]}>{status}</p>
    </div>
  );
};

export default FriendListItem;
