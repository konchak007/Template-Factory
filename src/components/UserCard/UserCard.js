import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./UserCard.scss";
import { withPreventingEvent } from "../../utils";

const UserCard = ({ avatar, login }) => (
  <Link to={`/profile/${login}`}>
    <div className="d-flex justify-content-start user-card ">
      <img src={avatar} alt="avatar" />
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

UserCard.propTypes = {
  login: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export default UserCard;
