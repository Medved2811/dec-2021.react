import React from 'react';

const User = ({user,setUsersDetails}) => {
    const {id,name} = user
    return (
        <div>
            {id}.) {name}
            <button onClick={()=>setUsersDetails(user)}>getDetails</button>
        </div>
    );
};

export {User};

