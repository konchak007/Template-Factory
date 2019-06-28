import React from "react";
import PropTypes from "prop-types";
import UserCard from "../UserCard/UserCard";
import "./OrganisationInfo.scss";

const OrganisationInfo = ({
  name,
  login,
  avatar_url,
  description,
  members
}) => (
  <div>
    <div className="organisation-info">
      <img src={avatar_url} alt="organisation-logo" />
      <div className="m-3">
        <div> {name || login}</div>
        {description && <div> {description}</div>}
      </div>
    </div>

    <h4>Members </h4>

    {members.map(user => (
      <UserCard key={user.id} avatar={user.avatar_url} login={user.login} />
    ))}
  </div>
);

OrganisationInfo.propTypes = {
  login: PropTypes.string.isRequired,
  name: PropTypes.string,
  avatar_url: PropTypes.string.isRequired,
  description: PropTypes.string,
  members: PropTypes.array.isRequired
};
OrganisationInfo.defaultProps = {
  name: null,
  description: null
};

export default OrganisationInfo;
