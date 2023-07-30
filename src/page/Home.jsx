import React from 'react';
import Sidebar from '../Component/Sidebar/Sidebar';
import ChatBar from '../Component/ChatBar/ChatBar';

const Home = () => {
    return (
        <div className='flex w-1/2 mx-auto border justify-center min-h-screen items-center'>
            <div className='bg-gray-400 w-1/2 h-[550px] '><Sidebar></Sidebar></div>
            <div className='bg-orange-500 w-1/2 h-[550px] '><ChatBar></ChatBar></div>
        </div>
    );
};

export default Home;