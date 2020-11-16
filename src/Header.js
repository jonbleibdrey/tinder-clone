import React from 'react'
import "./Header.css"
import FaceIcon from '@material-ui/icons/Face';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Flag from "./assest/images/flag2.PNG";


function Header() {
    return (
        <div className="header">
            <FaceIcon/>

            <img className="header__logo" src={Flag} alt="america flag"/>

            <MailOutlineIcon/>
        </div>
    )
}

export default Header
