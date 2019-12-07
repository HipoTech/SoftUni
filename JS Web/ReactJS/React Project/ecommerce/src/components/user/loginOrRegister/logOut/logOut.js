import React, { Component, useState, useEffect, useCallback } from 'react';
import { StoreContext } from '../../../../globalFunctions/Store/Store';
import { logout } from '../../../../globalFunctions/Store/actions';

const LogOut = () => {
    const { dispatch } = React.useContext(StoreContext);
    dispatch(logout());
    return null;
}

export default LogOut;