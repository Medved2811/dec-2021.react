import React, {useEffect, useState} from 'react';

import {userServices} from "../../services";
import {User} from "../User/User";

const Users = () => {
    const [users,setUsers] = useState([])
    const [user,setUser] = useState([null])

    useEffect(() => {
        userServices.getAll().then(({data}) => setUsers(data))
        },[])
    const getUserId = async (id) => {
        const {data} =await userServices.getById(id)
        setUser(data)
        console.log(data);
    }
    return (
       <div>
          <div>
              {users.map(user=><User key={user.id} user={user} getUserId ={getUserId}/>)}
          </div>
           <div>
               {user && <div>{user.name} --{user.username}</div>}
           </div>
       </div>

    );
};

export {Users};