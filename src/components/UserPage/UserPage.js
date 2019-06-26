import React from 'react';
import './UserPage.scss'



const UserPage = ({avatar,name,location,biography,login,repos,company}) =><div> <img src={avatar} />
<div>{name}</div>
<div>{login}</div>
<div>{location}</div>
<div>{biography}</div>
<div>{repos}</div>
<div>{company}</div>
</div>



export default UserPage;
