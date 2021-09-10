import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
  }));

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography style={{marginTop: '10rem'}}>
                        Hi, my name’s Casey, and I’m a Full-Stack Developer who specializes in building and designing 
                        exceptional and accessible digital experiences. I have always loved tech and building new things, so I am constantly reading 
                        up on and experimenting with new technologies. I’ve worked with a wide variety of programming languages and frameworks, but 
                        currently I use the MERN stack for most of my web development projects. I attended the University of Central Florida and completed 
                        The UCF Full-Stack Web Development Bootcamp as well.
                    </Typography>
                </Grid>              
            </Grid>
        </div>
    )
}

export default About
