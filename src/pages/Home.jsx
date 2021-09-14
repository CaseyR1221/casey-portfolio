import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Me from '../assets/images/me2.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
  }));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', marginTop: '10rem'}}>
                    <img src={Me} alt='Casey Rowlands' height='450' width='450' style={{borderRadius: '50%'}} />
                </Grid>  
                <Grid item xs={12}>
                  <h3 style={{ textAlign: 'center', fontSize: '3rem'}}>
                    <span style={{fontSize: '2em', color: '#129B50'}}>Hi!</span> Welcome to my site. 
                    My name is <span style={{fontSize: '5rem', color: '#F59725'}}>Casey</span>, and I'm a 
                    <span style={{fontSize: '2em', color: '#2EBAE0'}}>Web Developer</span><br /> 
                    specializing in the <span style={{fontSize: '2em', color: '#129B50'}}>M</span>
                    <span style={{fontSize: '2em', color: '#F59725'}}>E</span><span style={{fontSize: '2em', color: '#2EBAE0'}}>R</span>
                    <span style={{fontSize: '2em', color: '#ABBC78'}}>N</span> stack!
                  </h3>
                </Grid>             
            </Grid>
        </div>
  );
}

export default Home;
