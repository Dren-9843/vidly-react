import React from 'react';
// import Input from './common/input';
import * as auth from '../services/authServices'
import Joi from 'joi-browser'
import Form from './common/form'
import * as userService from '../services/userService'
// import { toast } from 'react-toastify';
class Register extends Form{
    state = {
        data: {username: "", password: "", name: ""},
        errors: {}
    }

    schema = {
        username: Joi.string()
        .required()
        .email()
        .label('Username'),
       password: Joi.string()
        .required()
        .min(5)
        .label('Password'),
        name: Joi.string()
        .required()
        .label('Name')
    }

    
    doSubmit = async () => {
        try {
          const response = await userService.register(this.state.data);
          auth.loginWithJwt(response.headers['x-auth-token']);
          this.props.history.replace("/movies")
        } catch (ex) {
          if (ex.response && ex.response.status === 400) {
            const errors = { ...this.state.errors };
            errors.username = ex.response.data;
            this.setState({ errors })
      }
    }
    }

    


    render() { 
        return ( 
        <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
               {this.renderInput('username', 'Username')}
               {this.renderInput('password', 'Password', "password")}
               {this.renderInput('name', 'Full Name')}
                <br/>
                {this.renderButton('Register')}
            </form>
        </div>) ;
    }
    }

 
export default Register;