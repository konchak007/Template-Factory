import React from "react";
import { Link } from "react-router-dom";
import './UserCard.scss';

const f = e => e.stopPropagation();

const UserCard = ({avatar,login}) => (
  <Link to={`/profile/${login}`}>
    <div class="d-flex justify-content-start user-card ">
      <img src={avatar}width="50" height="50" />
      <div>
        <div>{login}</div>
        <div onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          window.open(`https://github.com/${login}?tab=followers`)
        } }>
          {/* <a onClick={f} href={} rel="noopener noreferrer" target="_blank">Followers</a> */}
          Followers
        </div>
      </div>
    </div>
  </Link>
);

export default UserCard;
