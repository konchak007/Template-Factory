import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.scss";
import { withPreventingEvent } from "../../utils";

const UserCard = ({ avatar, login }) => (
  <Link to={`/profile/${login}`}>
    <div class="d-flex justify-content-start user-card ">
      <img src={avatar} alt="avatar"  />
      <div className="d-flex flex-column justify-content-center">
        <div>{login}</div>
        <div>
          <span
            className="link mr-3"
            onClick={withPreventingEvent(() =>
              window.open(`https://github.com/${login}?tab=followers`)
            )}
          >
            Followers
          </span>
          <span
            className="link"
            onClick={withPreventingEvent(() =>
              window.open(`https://github.com/${login}?tab=following`)
            )}
          >
            Following
          </span>
        </div>
      </div>
    </div>
  </Link>
);

export default UserCard;
