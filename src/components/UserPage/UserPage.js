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
      <img src={avatar} alt="avatar" />
      <div>{name}</div>
      <div>{login}</div>
    </div>
    <div className="p-3">
      <div>
        <img src={require("../../images/placeholder.png")} alt="location" />
        {location}
      </div>
      <div>
        <span>Biography:</span>
        {biography}
      </div>
      <div><span>Company :</span>{company}</div>
    </div>
    <div className="repositories-container">
      <div>Public repositories :{repos}</div>
    </div>
  </div>
);

export default UserPage;
