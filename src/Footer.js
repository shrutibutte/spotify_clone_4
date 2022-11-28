import React from 'react'
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
// import {Grid} from '@mui/icons-material/Grid';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';



function Footer() {
  return (
    <div className='footer'>
      <div className="footer__left">
      <img className="footer__albumLogo" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273365b3fb800c19f7ff72602da&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F5rb9QrpfcKFHM1EUbSIurX&tbnid=lRWOXxPXqxGijM&vet=12ahUKEwiXzM7Ri8v7AhVb5HMBHYG9BF8QMyhTegUIARC6AQ..i&docid=MYILds7sSna_bM&w=639&h=640&q=yeah&ved=2ahUKEwiXzM7Ri8v7AhVb5HMBHYG9BF8QMyhTegUIARC6AQ" alt="" />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>

      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>

      </div>
    </div>
  )
}

export default Footer