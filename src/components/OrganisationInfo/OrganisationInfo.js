import React from "react";
import UserCard from "./../UserCard/UserCard";

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
        <UserCard key={user.id} avatar={user.avatar_url} login={user.login} />
    ))}
  </div>
);

export default OrganisationInfo;
