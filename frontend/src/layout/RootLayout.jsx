import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <main className="flex flex-col bg-yellow-100 w-full h-full relative">
            <MainNavigation />
            <Outlet/>
        </main>
    )
}

export default RootLayout