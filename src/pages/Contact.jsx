import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: "aliceblue",
    margin: "10rem",
    padding: '3rem'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const Contact = () => {
    const classes = useStyles();

    // const [status, setStatus] = useState("Submit");

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setStatus("Sending...");
    //   const { firstName, lastName, email, message } = e.target.elements;
    //   let details = {
    //     firstName: firstName.value,
    //     lastName: lastName.value,
    //     email: email.value,
    //     message: message.value,
    //   };
    //   let response = await fetch("http://localhost:5000/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: JSON.stringify(details),
    //   });
    //   setStatus("Submit");
    //   let result = await response.json();
    //   alert(result.status);
    // };

    return (
            <div>
              {/* <div className={classes.root}>
                <TextField
                  id="margin-dense"
                  htmlFor="firstName"
                  placeholder="John"
                  className={classes.textField}
                  helperText="First Name"
                />
                <TextField
                  id="margin-dense"
                  htmlFor="lastName"
                  placeholder="Smith"
                  className={classes.textField}
                  helperText="Last Name"
                />
                <TextField
                  id="margin-dense"
                  htmlFor="email"
                  placeholder="email@mail.com"
                  className={classes.textField}
                  helperText="Email"
                />
                <TextField
                  style={{ margin: '2rem' }}
                  htmlFor="message"
                  placeholder="Hi!"
                  helperText="Your Message"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <button type="submit">{status}</button>
              </div> */}
              <div>
                  <Typography variant='h1' style={{marginTop: '10rem', textAlign: 'center'}}>
                      Contact Me! casey_codes@caseyrowlands.com
                  </Typography>
              </div>
            </div>
    );
};

export default Contact

