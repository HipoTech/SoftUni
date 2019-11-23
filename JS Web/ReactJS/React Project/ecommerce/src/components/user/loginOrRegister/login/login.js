import React from 'react';
import { logInUser } from '../../../../api';
import Error from '../../../propmts/error/error';
import './login.css';
import * as yup from 'yup';
const { Component } = React;

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

    getRegisterData = (event) => {
        switch (event.target.name) {
            case 'userName':
                this.user.userName = event.target.value;
                break;
            case 'password':
                this.user.password = event.target.value;
                break;
            default:
                break;
        }
    }


    validateInput = (btn) => {
        // const login = yup.object()({
        //     name: yup.string().required(),
        //     age: yup.string().required('Age is required')
        // });

        // login.isValid({
        //     name: 'jimmy',
        //     age: '',
        // })
        //     .then(function (valid) {
        //         console.log(valid);
        //         // => true
        //     })
        //     .catch(err => console.log(err))
        //     ;


        if (!this.user.userName) {
            this.setState({
                gotError: true,
                showError: true,
                message: 'Please enter an username!'
            });
            return;
        }
        if (!this.user.password) {
            this.setState({
                gotError: true,
                showError: true,
                message: 'Please enter an password!'
            });
            return;
        }
        this.setState({
            gotError: false,
            showError: false,
            message: 'No error to show!'
        });
        logInUser(this.user)
            .then((res) => {
                res.ok ? this.resetUser(btn) : this.serverErrorHandler(res.json());
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
            }
        })
    }

    resetUser = (btn) => {
        const password = btn.previousElementSibling;
        const userName = password.previousElementSibling;
        userName.value = '';
        password.value = '';
    }

    submit = (event) => {
        event.preventDefault();
        const btn = event.target;
        const staySignedIn = btn.nextElementSibling.firstElementChild;
        this.validateInput(btn);
    }

    render() {

        return <div className="col-sm-4 col-sm-offset-1">
            <div className="login-form">
                <form>
                    <Error showError={this.state.showError} message={this.state.message} title='Login:' />
                    <input type="text" onChange={this.getRegisterData} autoComplete="on" name="userName" placeholder="Name" />
                    <input type="password" onChange={this.getRegisterData} autoComplete="off" name="password" placeholder="Password" />
                    <button onClick={this.submit} type="submit" className="btn btn-default">Login</button>
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