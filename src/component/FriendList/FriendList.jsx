import PropTypes from 'prop-types';

import {
  FriendSection,
  FriendData,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from '../FriendList/FriendList.styled';

function FriendList({ friends }) {
  console.log(friends);
  return (
    <FriendSection>
      <FriendData>
        {friends.map(friend => (
          <FriendListItem key={friend.id}>
            <Status isOnline={friend.isOnline}>{friend.isOnline}</Status>
            <Avatar src={friend.avatar} alt="User avatar" width="48" />
            <Name>{friend.name}</Name>
          </FriendListItem>
        ))}
      </FriendData>
    </FriendSection>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FriendList;
