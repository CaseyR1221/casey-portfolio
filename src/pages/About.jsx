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
import Mongo from '../assets/images/mongo.png';
import Express from '../assets/images/express.png';
import ReactLogo from '../assets/images/react.png';
import Node from '../assets/images/node.png';
import Database from '../assets/images/database.png';
import Logo from '../assets/images/logo.png';

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
                <Grid item xs={12} style={{display: "flex", justifyContent: "center", paddingTop: '5rem'}}>
                    <img src={Logo} alt='logo' height= '350' width= '350'/>
                </Grid> 
                <Grid item xs={12} style={{ marginBottom: '10em'}}>
                    <Typography variant='h4' style={{ margin: '2em', lineHeight: '2em'}}>
                        Hi, my name’s Casey, and I’m a Full-Stack Developer who specializes in building and designing 
                        exceptional and accessible digital experiences. I have always loved tech and building new things, so I am constantly reading 
                        up on and experimenting with new technologies. I’ve worked with a wide variety of programming languages and frameworks, but 
                        currently I use the MERN stack for most of my web development projects. I am a graduate of the University of Central Florida 
                        Full-Stack Web Development Bootcamp, and currently pursuing my Bachelors in Computer Science part-time.
                    </Typography>
                </Grid> 
                <Grid item xs={12} lg={6}>
                    <img src={Globe} alt='green globe' height='475' width='475' />
                </Grid> 
                <Grid item xs={12} lg={6}>
                    <List
                        component="list"
                        aria-labelledby="nested-list-subheader"
                        className={classes.list}
                    >
                        <ListItem button style={{paddingBottom: '2em'}}>
                            <Typography variant='h3'>
                                My Proficiencies
                            </Typography>
                        </ListItem>
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
                <Grid item xs={12} lg={6}>
                    <img src={Database} alt='database' height='500' width='500' />
                </Grid> 
                <Grid item xs={12} lg={6} style={{paddingTop: '6rem'}}>
                    <List
                        component="list"
                        aria-labelledby="nested-list-subheader"
                        className={classes.list}
                    >
                        <ListItem button style={{paddingBottom: '2em'}}>
                            <Typography variant='h3'>
                                My Hobbies
                            </Typography>
                        </ListItem>
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
                </Grid> 
                <Grid item xs={12} lg={3} style={{marginTop: '7rem'}}>
                        <img src={Mongo} alt='MongoDB' height='300' width='300' />
                </Grid> 
                <Grid item xs={12} lg={3} style={{marginTop: '7rem'}}>
                        <img src={Express} alt='Express' />
                </Grid> 
                <Grid item xs={12} lg={3} style={{marginTop: '7rem'}}>
                        <img src={ReactLogo} alt='React' height='300' width='300' />
                </Grid> 
                <Grid item xs={12} lg={3} style={{marginTop: '7rem'}}>
                        <img src={Node} alt='Node' height='' width='' />
                </Grid>  
            </Grid>
        </div>
    )
}

export default About
