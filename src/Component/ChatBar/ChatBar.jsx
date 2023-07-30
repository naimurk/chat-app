import React from 'react';
import Message from './Message';
import Input from './Input';

const ChatBar = () => {
    return (
        <div className='flex flex-col h-full justify-between'>
            <div className='bg-slate-400 p-3'>name</div>
            <div className='h-full overflow-y-scroll'><Message></Message></div>
            <Input></Input>
        </div>
    );
};

export default ChatBar;