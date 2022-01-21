import PropTypes from 'prop-types';
import Profile from './Profile/Profile';
import { Container } from './App.styled';
import user from '../JSON/user.json';
import data from '../JSON/data.json';
import Statistics from './Statistics/Statistics';
import friends from '../JSON/friends.json';
import FriendList from './FriendList/FriendList';

function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />,
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default App;
