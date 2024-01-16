import React from "react";
import './profile.css'
import Logo from '../../logo.svg'

const Profile = (props) => {
    return (
        <div className="profile">

            <img src={Logo} />
            <h6>{props.userName}</h6>
        </div>
    )
}
export default Profile;