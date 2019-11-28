import React, { Component } from 'react';
import * as yup from 'yup';

import { logInUser } from '../../../../api';
import Error from '../../../propmts/error/error';
import { getDataFromForm } from '../../../../globalFunctions/formsHanler'

import './login.css';

class Login extends Component {
    state = {
        showError: false,
        gotError: true,
        message: '',
    }

    user = {
        userName: '',
        password: '',
    }

    getRegisterData = (event) => getDataFromForm(event, this.user)

    validateInput = () => {
        const login = yup.object({
            userName: yup
                .string()
                .required('Please enter an username!'),
            password: yup
                .string()
                .required('Please enter an password!'),
        });

        login.validate({
            userName: this.user.userName,
            password: this.user.password,
        })
            .then(isValid => {
                logInUser(this.user)
                    .then((res) => {
                        res.ok ? this.resetForm() : this.serverErrorHandler(res.json());
                    })
                    .catch((err) => console.log(err));
                this.setState({
                    gotError: false,
                    showError: false,
                    message: 'No error to show!'
                });
            })
            .catch(error => {
                this.setState({
                    gotError: true,
                    showError: true,
                    message: error.message
                });
            });
    }

    serverErrorHandler = (err) => {
        err.then(err => {
            if (err.message) {
                this.setState({
                    gotError: true,
                    showError: true,
                    message: `${err.message}`
                })
                return;
            }
            console.log(err);
        })
    }

    resetForm = () => {
        document.getElementById('myform').reset();
        this.user = {
            userName: '',
            password: '',
        }
    }

    resetUser = (btn) => {
        const password = btn.previousElementSibling;
        const userName = password.previousElementSibling;
        userName.value = '';
        password.value = '';
    }

    submit = (event) => {
        event.preventDefault();
        // const btn = event.target;
        // const staySignedIn = btn.nextElementSibling.firstElementChild;
        this.validateInput();
    }

    render() {

        return <div className="col-sm-4 col-sm-offset-1">
            <div className="login-form">
                <form id="myform" onSubmit={this.submit}>
                    <Error showError={this.state.showError} message={this.state.message} title='Login:' />
                    <input type="text" onChange={this.getRegisterData} autoComplete="on" name="userName" placeholder="Name" />
                    <input type="password" onChange={this.getRegisterData} autoComplete="off" name="password" placeholder="Password" />
                    <button type="submit" className="btn btn-default">Login</button>
                    <span>
                        <input name="staySignedIn" autoComplete="off" type="checkbox" className="checkbox" />
                        Keep me signed in
                    </span>
                </form>
            </div>
        </div>

    }
}

export default Login;