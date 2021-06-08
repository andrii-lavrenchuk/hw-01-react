import s from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => (
  <li>
    <span className={isOnline ? `${s.isOnline}` : `${s.isOffline}`}></span>
    <img src={avatar} alt={name} width="48" />
    <p>{name}</p>
  </li>
);

export default FriendListItem;
