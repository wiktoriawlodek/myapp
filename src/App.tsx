import React, {FC, useEffect, useState} from "react";
import {BrowserRouter as Router } from "react-router-dom";
import {useDispatch} from "react-redux";
import {getCurrentUser, getUsers} from "./actions/usersActions";

const App: FC = () => {
    const dispatch = useDispatch();

    type GetCurrentUser = ReturnType<typeof getCurrentUser>;
    type GetUsers = ReturnType<typeof getUsers>;

    useEffect(() => {
        dispatch<GetCurrentUser>(getCurrentUser());
        dispatch<GetUsers>(getUsers());
    });

    return(null);
}
export default App;
