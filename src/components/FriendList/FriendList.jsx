import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={css.item} key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
