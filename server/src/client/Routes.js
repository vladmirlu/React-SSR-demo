import React from 'react'
import HomePage from './pages/HomePage';
import UsersList, {loadData} from "./pages/UsersListPage";

export default [
        {
            path: '/',
            component: HomePage,
            exact: true
        },
        {
            loadData,
            path: '/users',
            component: UsersList
        },
    ];