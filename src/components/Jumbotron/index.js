import React from 'react';
import Typography from "@material-ui/core/Typography";

const Jumbotron = () => {
  return (
    <div style={{ marginTop: '15rem', textAlign: 'center' }}>
      <Typography variant='h3'>
        <span style={{fontSize: '2em', color: '#129B50'}}>Hi!</span> Welcome to my site. 
        My name is <span style={{fontSize: '2em', color: '#F59725'}}>Casey</span>, and I'm a 
        <span style={{fontSize: '2em', color: '#2EBAE0'}}>Web Developer</span>
        specializing in the <span style={{fontSize: '2em', color: '#129B50'}}>M</span>
        <span style={{fontSize: '2em', color: '#F59725'}}>E</span><span style={{fontSize: '2em', color: '#2EBAE0'}}>R</span>
        <span style={{fontSize: '2em', color: '#ABBC78'}}>N</span> stack!
      </Typography>
    </div>
  );
};

export default Jumbotron;
