import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import "./Header.css"
import FaceIcon from '@material-ui/icons/Face';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Flag from "./assest/images/flag2.PNG";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { blue } from '@material-ui/core/colors';


function Header({backButton}) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={()=> history.replace(backButton)}>
                    <ArrowBackIosIcon style={{ color: blue[800], fontSize: 65 }} className="header__icon"/>
                </IconButton>
            ):(
                <Link to="/profile">
                    <IconButton>
                        <FaceIcon style={{ color: blue[800], fontSize: 65 }} className="header__icon"/>
                    </IconButton>
                </Link>
            )}
           
            <Link to="/">
                <img className="header__logo" src={Flag} alt="america flag"/>
            </Link>
            <Link to="/chat">
                <IconButton>
                <MailOutlineIcon style={{ color: blue[800], fontSize: 65  }} className="header__icon"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
