import css from 'components/FriendList/FriendList.module.css'
export const FriendList = ({ friends }) => {
    
    
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className={css.friendListItem}>
          <span
            className={
              isOnline
                ? `${css.status} ${css.green}`
                : `${css.status} ${css.red}`
            }
          ></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
