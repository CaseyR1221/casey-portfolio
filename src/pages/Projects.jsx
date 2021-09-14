import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TastyBytes from '../assets/images/TastyBytes-Logo.jpg'
import FreshBytes from '../assets/images/fresh-bytes.png'
import Planner from '../assets/images/day-planner.png'
import DiscJockies from '../assets/images/disc-jockies.png'
import Employee from '../assets/images/Employee-tracker-screenshot.jpeg'
import Note from '../assets/images/note-taker.png'
import Weather from '../assets/images/weather.png'

const Projects = () => {
    return (
        <div id='projects' style={{marginTop: '5rem'}}>
            <Grid container spacing={7}>
                <Grid item xs={12}>
                    <Typography variant='h4'>
                        FreshBytes Kitchen
                    </Typography>
                    <Typography variant='h6'>
                        Full-Stack MERN application in conjuction with Stripe.js for payments.
                    </Typography>
                    <a
                        href='https://boiling-peak-08984.herokuapp.com/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={FreshBytes} alt='fresh bytes kitchen' className='pImage'/>
                    </a>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Typography variant='h4'>
                        Disc Jockies
                    </Typography>
                    <Typography variant='h6'>
                        Full-Stack Node.js application using the Handlebars.js view engine to render pages.
                    </Typography>
                    <a
                        href='https://glacial-badlands-02400.herokuapp.com/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={DiscJockies} alt='Disc Jockies' className='pImage'/>
                    </a>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Typography variant='h4'>
                        TastyBytes
                    </Typography>
                    <Typography variant='h6'>
                        Front end application using HTML, CSS/Bulma, JS, and the Spoonacular API.
                    </Typography>
                    <a
                        href='https://caseyr1221.github.io/TastyBytes/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={TastyBytes} alt='TastyBytes Logo' className='pImage'/>
                    </a>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Typography variant='h4'>
                        Day Planner
                    </Typography>
                    <Typography variant='h6'>
                        Full-Stack MERN application in conjuction with Stripe.js for payments.
                    </Typography>
                    <a
                        href='https://caseyr1221.github.io/work-day-planner/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={Planner} alt='Day Planner' className='pImage'/>
                    </a>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Typography variant='h4'>
                        Employee Tracker
                    </Typography>
                    <Typography variant='h6'>
                        Back End application using Node.js, and MySQL2.
                    </Typography>
                    <a
                        href='https://youtu.be/OIX3NhLKwAc'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={Employee} alt='Employee Tracker' className='pImage'/>
                    </a>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Typography variant='h4'>
                        Note Taker
                    </Typography>
                    <Typography variant='h6'>
                        Simple application using Express.js, HTML, and CSS.
                    </Typography>
                    <a
                        href=''
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={Note} alt='Note Taker' className='pImage'/>
                    </a>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Typography variant='h4'>
                        Weather Dashboard
                    </Typography>
                    <Typography variant='h6'>
                        Front end application using a weather API to generate a 5-day forcast.
                    </Typography>
                    <a
                        href='https://caseyr1221.github.io/weather-dashboard/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={Weather} alt='Weather Dash' className='pImage'/>
                    </a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Projects
