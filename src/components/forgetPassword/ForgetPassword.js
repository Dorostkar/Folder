import React, { Component } from "react";
import { withRouter,Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
    h5:{
        marginBottom: theme.spacing.unit * 3
    },
    detail:{
        textAlign: 'center'
    }
  });
class ForgetPassword extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const {classes} = this.props;
       return( 
       <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>       
                <Typography className={classes.h5} component="h5" variant="h5">
                    Forget Password
                </Typography>
                <Typography component="p" className={classes.detail}>
                    Please enter your email address and we'll send you instructions on how to reset your password
                </Typography>
                <form>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel>Your e-mail address</InputLabel>
                        <Input id="email" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Get Password
                    </Button>
                </form>
            </Paper>
        </main>
        )
    }
}

ForgetPassword.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(ForgetPassword);