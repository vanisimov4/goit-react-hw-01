import FriendListItem from '../friendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
      ;
    </ul>
  );
};

export default FriendList;
