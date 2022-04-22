import React from 'react';

const User = ({user,getUserId}) => {
    const {id,name,username} = user;
    return (
        <div className={'w200'}>
            {id} --{name} --{username}
            <button onClick={()=> getUserId(id)}>click</button>
        </div>
    );
};

export {User};