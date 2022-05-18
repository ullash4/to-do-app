import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth);
    }
  return (
    <div className="navbar bg-base-200 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={'/users'}>Users</Link>
            </li>
            <li>
            <Link to={'/addtask'}>Add Task</Link>
            </li>
            <li>
            <Link to={'/mytask'}>My Task</Link>
            </li>
            <li>
            {user ? <button onClick={handleSignOut}>Sign Out</button> : <NavLink to={'/login'} className="">Log In </NavLink> }
            </li>
          </ul>
        </div>
        <Link to={"/home"} className="btn btn-ghost normal-case text-xl">
          To-Do App
        </Link>
      </div>
      <div className="navbar-end hidden  lg:flex">
        <ul className="menu menu-horizontal gap-2 p-0">
        <li>
              <NavLink to={'/users'}>Users</NavLink>
            </li>
            <li>
            <NavLink to={'/addtask'}>Add Task</NavLink>
            </li>
            <li>
            <NavLink to={'/mytask'}>My Task</NavLink>
            </li>
            <li>
            {user ? <button onClick={handleSignOut}>Sign Out</button> : <NavLink to={'/login'} className="">Log In </NavLink> }
            </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
