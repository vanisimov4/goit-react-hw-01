import FriendListItem from '../friendListItem/FriendListItem';

const FriendList = ({ friend }) => {
  console.log(friend.name);
  return (
    <ul>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      <li>
        <FriendListItem avatar={friend.avatar} name={friend.name} />
      </li>
    </ul>
  );
};

export default FriendList;
