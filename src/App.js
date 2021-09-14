import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume"
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Logo from '../src/assets/images/logo.png';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Links from "./components/Links";

const useStyles = makeStyles({
  list: {
    width: 250,
    background: "linear-gradient(#bf64e6, #2a236d)"
  },
  fullList: {
    width: 'auto',
  },
});

const App = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Nav />
      <Divider />
      <Links />
    </div>
  );

  return (
      <Router>
        <div className="App">
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <Button onClick={toggleDrawer('top', true)} >
              <MenuOpenIcon style={{fill: "white", height: 75, width: 75}} />
            </Button>
            <Drawer 
              id='navigation' 
              anchor='top' open={state['top']} 
              onClose={toggleDrawer('top', false)}
            >
              {list('top')}
            </Drawer>
          </div>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>
      </Router>
    // <Router>
    //   <div className="App">
    //     <div className={classes.root}>
    //       <CssBaseline />
    //       <AppBar
    //         position="fixed"
    //         id="navbar"
    //         className={clsx(classes.appBar, {
    //           [classes.appBarShift]: open,
    //         })}
    //       >
    //         <Toolbar>
    //           <img src={Logo} alt='logo' height='128' width='128' style={{margin: 'auto'}} />
    //           <IconButton
    //             color="inherit"
    //             aria-label="open drawer"
    //             edge="end"
    //             onClick={handleDrawerOpen}
    //             className={clsx(open && classes.hide)}
    //           >
    //             <MenuIcon />
    //           </IconButton>
    //         </Toolbar>
    //       </AppBar>
    //       <main
    //         className={clsx(classes.content, {
    //           [classes.contentShift]: open,
    //         })}
    //       >
    //         <Switch>
    //           <Route exact path="/" component={Home} />
    //           <Route exact path="/about" component={About} />
    //           <Route exact path="/projects" component={Projects} />
    //           <Route exact path="/resume" component={Resume} />
    //           <Route exact path="/contact" component={Contact} />
    //           <Route component={NoMatch} />
    //         </Switch>
    //       </main>
    //       <Drawer
    //         className={classes.drawer}
    //         variant="persistent"
    //         anchor="right"
    //         open={open}
    //         classes={{
    //           paper: classes.drawerPaper,
    //         }}
    //       >
    //         <div className={classes.drawerHeader}>
    //           <IconButton onClick={handleDrawerClose}>
    //             {theme.direction === "rtl" ? (
    //               <ChevronLeftIcon style={{ fill: 'white' }} />
    //             ) : (
    //               <ChevronRightIcon style={{ fill: 'white', fontSize: '2rem' }} />
    //             )}
    //           </IconButton>
    //         </div>
    //         <Divider />
    //         <Nav />
    //         <Divider />
    //         <Links />
    //       </Drawer>
    //     </div>
    //     <Footer />
    //   </div>
    // </Router>
  );
};

export default App;

