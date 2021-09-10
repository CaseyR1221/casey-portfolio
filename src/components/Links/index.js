import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import git from '../../assets/images/white-git.png'
import stackOverflow from '../../assets/images/stack-overflow.png'
import linkedin from '../../assets/images/linkedin.png'
import spotify from '../../assets/images/spotify.png'

const Links = () => {
  return (
        <List className='nav-links'>
          <ListItem button style={{ paddingTop: "4rem" }}>
            <a
                href='https://github.com/CaseyR1221'
                target='_blank'
                rel='noreferrer'
            >
                <span>
                    <img src={git} alt='github' />
                </span>
            </a>
          </ListItem>
          <ListItem button style={{ paddingTop: "4rem" }}>
            <a
                href='https://stackoverflow.com/users/10541891/casey-r'
                target='_blank'
                rel='noreferrer'
            >
                <span>
                    <img src={stackOverflow} alt='stack overflow' />
                </span>
            </a> 
          </ListItem>
          <ListItem button style={{ paddingTop: "4rem" }}>
            <a
                href='https://www.linkedin.com/in/casey-rowlands-0311/'
                target='_blank'
                rel='noreferrer'
            >
                <span>
                    <img src={linkedin} alt='linkedin' />
                </span>
            </a> 
          </ListItem>
          <ListItem button style={{ paddingTop: "4rem" }}>
            <a
                href='https://open.spotify.com/user/12172853125'
                target='_blank'
                rel='noreferrer'
            >
                <span>
                    <img src={spotify} alt='spotify' />
                </span>
            </a> 
          </ListItem>
        </List>
  );
}

export default Links;