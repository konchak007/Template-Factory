import React from "react";
import "./UserPage.scss";

const UserPage = ({
  avatar,
  name,
  location,
  biography,
  login,
  repos,
  company
}) => (
  <div className="user-page m-4">
    <div className="user-info">
    <img src={avatar} />
    <div>{name}</div>
    </div>
    <div className="p-3">
    <div>Login :{login}</div>
    <div>{location}</div>
    <div>{biography}</div>
    <div>Public repositories :{repos}</div>
    <div>Company :{company}</div>
    </div>
  </div>
);

export default UserPage;
