import React, { Component, useState, useEffect, useCallback } from 'react';
import * as yup from 'yup';
import { Redirect } from 'react-router-dom';

import Error from '../../../propmts/error/error';
import { getDataFromForm } from '../../../../globalFunctions/formsHanler'
import { StoreContext } from '../../../../globalFunctions/Store/Store';
import { login } from '../../../../globalFunctions/Store/actions';

import './login.css';

const Login = () => {
    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState('');

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [staySignedIn, setStaySignedIn] = useState(false);

    const { state, dispatch } = React.useContext(StoreContext);
    const loginAction = login;

    const validateInput = useCallback(() => {
        const login = yup.object({
            userName: yup
                .string()
                .required('Please enter an username!'),
            password: yup
                .string()
                .required('Please enter an password!'),
        });

        login.validate({
            userName: userName,
            password: password,
        })
            .then(isValid => {
                dispatch(loginAction(isValid))
            })
            .catch(error => {
                console.log(error);
                setShowError(true);
                setMessage(error.message);
            });
    }, [userName, password, dispatch])

    const serverErrorHandler = (err) => {
        err.then(err => {
            if (err.message) {
                setShowError(true);
                setMessage(`${err.message}`);
                return;
            }
            console.log(err);
        })
    }

    const submit = (event) => {
        event.preventDefault();
        const btn = event.target;
        const staySignedInBoolian = btn.lastElementChild.firstElementChild.checked;
        setStaySignedIn(staySignedInBoolian)
        validateInput();
    }

    return <div className="col-sm-4 col-sm-offset-1">
        <div className="login-form">
            <form id="myform" onSubmit={submit}>
                <Error showError={showError} message={message} title='Login:' />
                <input type="text" onChange={(e) => setUserName(e.target.value)} autoComplete="on" name="userName" placeholder="Name" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} autoComplete="off" name="password" placeholder="Password" />
                <button type="submit" className="btn btn-default">Login</button>
                <span>
                    <input name="staySignedIn" autoComplete="off" type="checkbox" className="checkbox" />
                    Keep me signed in
                    </span>
            </form>
        </div>
    </div>

}

export default Login;