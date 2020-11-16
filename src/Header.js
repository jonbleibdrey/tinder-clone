import React from 'react'
import "./Header.css"
import FaceIcon from '@material-ui/icons/Face';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Flag from "./assest/images/flag2.PNG";
import IconButton from "@material-ui/core/IconButton";


function Header() {
    return (
        <div className="header">
            <IconButton>
            <FaceIcon fontSize="large" className="header__icon"/>
            </IconButton>

            <img className="header__logo" src={Flag} alt="america flag"/>
            <IconButton>
            <MailOutlineIcon fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
