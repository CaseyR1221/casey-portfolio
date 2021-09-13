import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Jumbotron from '../components/Jumbotron';
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
                <Grid item xs={12} lg={4} style={{marginTop: '10rem', display: 'flex', justifyContent: 'center'}}>
                    <img src={Me} alt='Casey Rowlands' height='450' width='450' />
                </Grid>  
                <Grid item xs={12} lg={8}>
                    <Jumbotron />
                </Grid>             
            </Grid>
        </div>
  );
}

export default Home;
