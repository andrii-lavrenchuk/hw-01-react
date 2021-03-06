import PropTypes from "prop-types";
import s from "./Profile.module.css";

const Profile = ({
  name,
  tag = "unknown",
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={s.profile}>
    <div className={s.description}>
      <img src={avatar} alt={name} className={s.avatar} width="200" />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>

    <ul className={s.stats}>
      <li className={s.item}>
        <span className={s.label}>Followers </span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Views </span>
        <span className={s.quantity}> {views}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Likes </span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
