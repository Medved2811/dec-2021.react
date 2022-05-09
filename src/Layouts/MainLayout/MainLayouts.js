import {Outlet, Link, NavLink} from "react-router-dom"
import css from './MainLayouts.module.css'

const MainLayouts = () => {
    return (
        <div>
           <div className={css.header}>
               <NavLink to="/home">Home</NavLink>
               <NavLink to="/users">Users</NavLink>
               <NavLink to="/posts">Posts</NavLink>
               <NavLink to="/about">About</NavLink>
           </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export  {MainLayouts};