import PropTypes from 'prop-types';

import {
  ProfileCard,
  Avatar,
  UserName,
  TagName,
  LocationName,
  Stats,
  StatsItem,
  StatsLabel,
  StatsNumb,
} from '../Profile/Profile.styled';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard>
      <Avatar src={avatar} alt="User avatar" />
      <UserName>{username}</UserName>
      <TagName>{`@${tag}`}</TagName>
      <LocationName>{location}</LocationName>
      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsNumb>{stats.followers}</StatsNumb>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsNumb>{stats.views}</StatsNumb>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsNumb>{stats.likes}</StatsNumb>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: (PropTypes.objectOf = {
    [PropTypes.string]: PropTypes.string,
    [PropTypes.string]: PropTypes.number,
  }),
};
export default Profile;
