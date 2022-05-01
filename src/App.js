import React, {useState} from 'react';
import {Posts, UserDetails, Users} from "./components";
import css from './App.module.css'
import {postServices} from "./services";

const App = () => {
    const [userDetails,setUserDetails] = useState(null)
    const [posts,setPosts] = useState([])

    const getUserId = async (userId)=>{
        const {data}= await postServices.getPostByUserId(userId)
        setPosts(data)
    }
  return (
      <div>
        <div className={css.wrap}>
            <Users setUserDetails={setUserDetails}/>
            {userDetails && <UserDetails userDetails={userDetails} getUserId={getUserId}/>}
        </div>
          <hr/>
          <Posts posts={posts}/>
      </div>
  );
};

export default App;
