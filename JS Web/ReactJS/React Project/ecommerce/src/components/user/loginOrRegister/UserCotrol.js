import React from 'react';
import Login from './login/login';
import Register from './register/register';
import './UserCotrol.css';
const { Component, Fragment } = React;

class UserCotrol extends Component {
    render() {
        return <Fragment>
            <Login />
            <div className="col-sm-1">
                <h2 className="or">OR</h2>
            </div>
            <Register />
        </Fragment>
    }
}

export default UserCotrol;