import React from "react";
import UserCard from "./../UserCard/UserCard";
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
      <img src={avatar_url} />
      <div className="m-3">
        {<div> {name} </div> || <div> Login: {login}</div>}
        {description && <div> {description}</div>}
      </div>
    </div>

    <h4>Members </h4>

    {members.map(user => (
      <UserCard key={user.id} avatar={user.avatar_url} login={user.login} />
    ))}
  </div>
);

export default OrganisationInfo;
