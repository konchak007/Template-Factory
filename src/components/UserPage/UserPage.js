import React from "react";
import "./UserPage.scss";
import locationIcon from "../../images/placeholder.png";

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
      <div className="font-weight">{login}</div>
    </div>
    <div className="p-3">
      <img src={locationIcon} alt="location" />
      {location}
      <div>
        Biography:<span className="font-weight">{biography}</span>
      </div>
      <div>
        Company :<span className="font-weight">{company}</span>
      </div>
    </div>
    <div className="repositories-container m-3">
      <div>Public repositories :{repos}</div>
    </div>
  </div>
);

export default UserPage;
