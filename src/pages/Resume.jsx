import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Casey from '../assets/images/resume-pic.JPG'

const useStyles = makeStyles((theme) => ({
    root: {
      color: 'black',
    },
  }));

const Resume = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container style={{marginTop: '7rem'}}>
        <Grid item xs={6} className='resume-left' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img src={Casey} alt='Casey Rowlands' height='350' width='350' style={{marginTop: '5rem', borderRadius: '25%' }} />
          <div style={{paddingTop: '5rem'}}>
              <Typography variant='h2' style={{paddingBottom: '2rem'}}>
                  Contact Me:
              </Typography>
              <Typography variant='h5'>
                Email: crowlandsdev@gmail.com
              </Typography>
              <Typography variant='h5'>
                <a
                    href="https://github.com/CaseyR1221"
                    target="_blank"
                    rel='noreferrer'
                    style={{color: 'white'}}
                >
                    Github: CaseyR1221
                </a>
              </Typography>
              <Typography variant='h5'>
                <a
                    href="https://www.linkedin.com/in/casey-rowlands-0311/"
                    target="_blank"
                    rel='noreferrer'
                    style={{color: 'white'}}
                >
                    Linkedin
                </a>
              </Typography>
          </div>
        </Grid>       
          <Grid item xs={6} className="resume-right">
            <div className="introduction">
              <Typography className="intro-h" variant='h4' style={{margin: '1rem'}}>
                Intro
              </Typography>
              <div className="content" style={{margin: '2rem'}}>
                <Typography className="intro-p">
                  I&#39;m a Full-Stack Developer who specializes in building and designing 
                  exceptional and accessible digital experiences.
                  I love designing and building new and exciting things, so I
                  feel right at home as a Full-Stack Developer. I&#39;m
                  experienced in developing and designing products for the web,
                  from simple landing pages to full-fledged web apps.
                  I&#39;m currently seeking a Front-End Development position 
                  with an innovative company where i can put my creative skills to use.
                </Typography>
              </div>
            </div>
            <div className="skills">
              <Typography className="skills-h" variant='h4' style={{margin: '1rem'}}>
                Skills
              </Typography>
              <div className="content" style={{margin: '2rem'}}>
                <div>
                  <Typography className="skill-category">
                    <strong>Languages: &nbsp;</strong>
                  </Typography>
                  <Typography className="skill-category" style={{marginBottom: '1rem',  marginLeft: '1rem'}}>
                    JavaScript (ES6), HTML5, CSS3, Java, PHP
                  </Typography>
                </div>
                <div className="skill-category">
                  <Typography className="skill-category">
                    <strong>Languages: &nbsp;</strong>
                  </Typography>
                  <Typography className="skill-category" style={{marginBottom: '1rem',  marginLeft: '1rem'}}>
                    jQuery, Bootstrap, Bulma, Handlebars, Node, Express,
                    MySQL, PostgreSQL, MongoDB, Angular, Vue, React, Redux
                  </Typography>
                </div>
                <div className="skill-category">
                  <Typography className="skill-category">
                    <strong>Tools: &nbsp;</strong>
                  </Typography>
                  <Typography className="skill-category" style={{marginBottom: '1rem',  marginLeft: '1rem'}}>
                    Git &amp; Github, Command Line, Grunt, Insomnia, DBeaver,
                     MongoDB Compass, Robo3T, Heroku, Netlify
                  </Typography>
                </div>
              </div>
            </div>
            <div className="education">
              <Typography className="education-h" variant='h4' style={{margin: '1rem'}}>
                Education
              </Typography>
              <div className="content" style={{margin: '2rem'}}>
                <Typography className="university">
                    <strong>Valencia College</strong>
                </Typography>
                <Typography className="college">
                    <em>College of Computer and Information Science</em>
                </Typography>
                <Typography className="major">
                  <strong>Major:</strong> Computer Science
                </Typography>
              </div>
              <div className="content" style={{margin: '2rem'}}>
                <Typography className="university">
                    <strong>University of Central Florida Coding Bootcamp</strong>
                </Typography>
                <Typography className="college">
                    <em>College of Continuing Education</em>
                </Typography>
                <Typography className="major">
                  <strong>Major:</strong> Full-Stack Web Development
                </Typography>
              </div>
            </div>
            <div className="projects">
              <Typography className="projects-h" variant='h4' style={{margin: '1rem'}}>
                Projects
              </Typography>
              <div className="content" style={{margin: '2rem'}}> 
                <Typography variant='h5' className="project-item">
                    caseyrowlands.com  
                </Typography>
                <Typography className="project-desc">
                    Portfolio site designed and coded from scratch to showcase
                    my skills and past work. (This is the site you're on!)
                </Typography>
                <Typography variant='h5' className="project-item">
                  <a
                    className="project-title"
                    href="https://caseyr1221.github.io/TastyBytes/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TastyBytes
                  </a>
                </Typography>
                <Typography className="project-desc">
                    Front end web app built using HTML, CSS/Bulma, and JavaScript
                    to provide users a way to find recipes using food items they
                    already have in their homes.
                </Typography>
                <Typography variant='h5' className="project-item">
                  <a
                    className="project-title"
                    href="https://glacial-badlands-02400.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Disc Jockies
                  </a>
                </Typography>
                <Typography className="project-desc">
                    Full-stack Node.js application that uses a Handlebars.js view engine
                    to render the front end. Allows users to view disc golf discs, leave
                    reviews on discs, and fins disc gold courses near them.
                </Typography>
                <Typography variant='h5' className="project-item">
                  <a
                    className="project-title"
                    href=""
                    target="_blank"
                  >
                    Note Taker
                  </a>
                </Typography>
                <Typography className="project-desc">
                    Express.js, HTML, and CSS application that allows a user to write notes 
                    that are saved to local storage, and then retrieve all of those notes to 
                    be viewed at their convenience.
                </Typography>
              </div>
            </div>
        </Grid>
      </Grid>
      <div className="resume-PDF-button" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <a href="" target="_blank">
            <Button variant="contained" style={{marginTop: '2rem'}}>Grab a PDF of my full resume</Button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
