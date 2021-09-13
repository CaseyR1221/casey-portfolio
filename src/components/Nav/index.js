import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const Nav = () => {
  return (
        <List className='nav-links'>
          <ListItem button style={{ paddingTop: "4rem" }}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText>
                <Link to="/" style={{ fontSize: '2rem', color: 'white' }}>Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem button style={{ paddingTop: "4rem" }}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText>
                <Link to="/about" style={{ fontSize: '2rem', color: 'white' }}>About</Link>
            </ListItemText>
          </ListItem>
          <ListItem button style={{ paddingTop: "4rem" }}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText>
                <Link to="/projects" style={{ fontSize: '2rem', color: 'white' }}>Projects</Link>
            </ListItemText>
          </ListItem>
          <ListItem button style={{ paddingTop: "4rem" }}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText>
                <Link to="/resume" style={{ fontSize: '2rem', color: 'white' }}>Resume</Link>
            </ListItemText>
          </ListItem>
          <ListItem button style={{ paddingTop: "4rem" }}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText>
                <Link to="/contact" style={{ fontSize: '2rem', color: 'white' }}>Contact</Link>
            </ListItemText>
          </ListItem>
        </List>
  );
}

export default Nav;
