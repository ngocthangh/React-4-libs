import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from './pages/AboutPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/about',
        exact: false,
        main: () => <AboutPage/>
    }
];

export default routes;
