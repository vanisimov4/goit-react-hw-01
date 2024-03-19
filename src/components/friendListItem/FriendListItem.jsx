const FriendListItem = ({ avatar, name, isOnline }) => (
<div>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p>Friend status</p>
</div>
    );

export default FriendListItem;