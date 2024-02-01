import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItemContainer, Status, Avatar, Name } from '../FriendList/FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemContainer>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </FriendListItemContainer>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
