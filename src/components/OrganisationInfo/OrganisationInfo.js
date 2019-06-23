import React from "react";
import { Link } from "react-router-dom";

const OrganisationInfo = ({
  name,
  login,
  avatar_url,
  description,
  members
}) => (
  <div>
    <div>{name || login}</div>
    <img src={avatar_url} />
    {description && <div>Description: {description}</div>}
    <h1>Members:</h1>

    {members.map(user => (
      <Link to={`/profile/${user.login}`}>
        <div key={user.id}>
          <div>{user.login}</div>
          <img src={user.avatar_url} width="50" height="50" />
        </div>
      </Link>
    ))}
  </div>
);

export default OrganisationInfo;
