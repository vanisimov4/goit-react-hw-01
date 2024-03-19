import FriendListItem from '../friendListItem/FriendListItem';

const FriendList = friends => {
      console.log(friends.avatar);
    return    (
        <ul>
            {/* Кількість li залежить від кількості об'єктів в масиві */}
            <li>
                <FriendListItem avatar={friends.avatar} name={friends.name} />
            </li>
        </ul>
    );
};

export default FriendList;
