import React from 'react';
import { StoreContext } from "./Store/Store";
import { loginSuccess } from "./Store/actions";
import { logInUser } from '../api';

const Auth = ({ children }) => {
    const { dispatch } = React.useContext(StoreContext);
    React.useEffect(() => {
        fetch("http://localhost:8080/api/user/auth", { credentials: "include" })
            .then(res =>
                res.status === 200
                    ? res.json()
                    : res.text().then(text => Promise.reject(text))
            )
            .then(user => dispatch(loginSuccess(user)))
            .catch((err) => {
                console.log(err);
                dispatch(loginSuccess(null));
            });
    }, []);

    return <>{children}</>;
};

export default Auth;