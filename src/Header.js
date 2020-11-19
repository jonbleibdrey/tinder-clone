import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"
import FaceIcon from '@material-ui/icons/Face';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Flag from "./assest/images/flag2.PNG";
import IconButton from "@material-ui/core/IconButton";
import { blue } from '@material-ui/core/colors';


function Header() {
    return (
        <div className="header">
            <IconButton>
            <FaceIcon style={{ color: blue[800], fontSize: 65 }} className="header__icon"/>
            </IconButton>

            <img className="header__logo" src={Flag} alt="america flag"/>
            <Link to="/chat">
            <IconButton>
            <MailOutlineIcon style={{ color: blue[800], fontSize: 65  }} className="header__icon"/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header
