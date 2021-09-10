import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Globe from '../assets/images/green-globe.png';
import Motto from '../assets/images/motto.png';
import Chevron from '../assets/images/chevron.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    list: {
        width: '100%',
        maxWidth: 360,
        color: 'white',
    },    
    nested: {
        paddingLeft: theme.spacing(4),
      },
  }));

const About = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
      };
    
    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant='h4' style={{marginTop: '10rem', marginBottom: '5rem', lineHeight: '4rem'}}>
                        Hi, my name’s Casey, and I’m a Full-Stack Developer who specializes in building and designing 
                        exceptional and accessible digital experiences. I have always loved tech and building new things, so I am constantly reading 
                        up on and experimenting with new technologies. I’ve worked with a wide variety of programming languages and frameworks, but 
                        currently I use the MERN stack for most of my web development projects. I attended the University of Central Florida and completed 
                        The UCF Full-Stack Web Development Bootcamp as well.
                    </Typography>
                </Grid> 
                <Grid item xs={12} lg={6}>
                    <img src={Globe} alt='green globe' height='500' width='500' />
                </Grid> 
                <Grid item xs={12} lg={6}>
                    <List
                        component="list"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="h3" id="nested-list-subheader" style={{color: 'white', fontSize: '2rem'}}>
                                My Proficiencies
                            </ListSubheader>
                        }
                        className={classes.list}
                        >
                        <ListItem button onClick={handleClick}>
                            <Typography variant='h5'>
                                Foundations
                            </Typography>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        MacOS
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        HTML
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        CSS
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        Bootstrap
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        JavaScript
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        JQuery
                                    </Typography>
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClick}>
                            <Typography variant='h5'>
                                Front-End
                            </Typography>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        React.js
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        Redux
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        Gatsby
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        Vue.js
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        Angular.js
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        Netlify
                                    </Typography>
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClick}>
                            <Typography variant='h5'>
                                Back-End
                            </Typography>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        Node.js
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        Express.js
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        MongoDB
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        MySQL
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        PostgreSQL
                                    </Typography>
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <Typography variant='h6'>
                                        Heroku
                                    </Typography>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </Grid> 
                <Grid xs={12} lg={6} style={{paddingTop: '6rem'}}>
                    <List
                        component="list"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="h3" id="nested-list-subheader" style={{color: 'white', fontSize: '2rem'}}>
                                My Hobbies
                            </ListSubheader>
                        }
                        className={classes.list}
                        >
                        <ListItem button>
                            <Typography variant='h5'>
                                Web Development
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            <Typography variant='h5'>
                                Playing Disc Golf
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            <Typography variant='h5'>
                                Playing Tennis
                            </Typography>
                        </ListItem>
                        <ListItem button>
                            <Typography variant='h5'>
                                Playing Basketball
                            </Typography>
                        </ListItem>
                        <ListItem button onClick={handleClick}>
                            <Typography variant='h5'>
                                Video Games
                            </Typography>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <Typography variant='h6'>
                                    The Final Fantasy Series
                                </Typography>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <Typography variant='h6'>
                                    The Kingdom Hearts Series
                                </Typography>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <Typography variant='h6'>
                                    The Witcher Series
                                </Typography>
                            </ListItem>
                            </List>
                        </Collapse>
                    </List>
                    <img src={Chevron} alt='Chevron' height='1000' width='1000' />
                </Grid> 
                <Grid item xs={12} lg={6}>
                        <img src={Motto} alt='Life Motto' height='1000' width='1000'/>
                </Grid>  
            </Grid>
        </div>
    )
}

export default About
