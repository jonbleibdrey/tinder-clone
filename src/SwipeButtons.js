import React from 'react'

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
// import Alert from '@material-ui/lab/Alert';
import "./SwipeButtons.css"

function SwipeButtons() {

    function anAlert(){
        alert("Sorry,working on it. Feel free to swipe though?")
    }

    return (
        <div className="swipeButtons" onClick={anAlert}>
            
          
            <IconButton className="swipeButtons__repeat" >
            <ReplayIcon fontSize="large"  />
            </IconButton>
       

            <IconButton className="swipeButtons__left">
            <CloseIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__star">
            <StarRateIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__right">
            <FavoriteIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__lightning">
            <FlashOnIcon fontSize="large" />
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons
