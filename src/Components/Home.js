import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="lg:px-14">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/cTXKyLz/To-Do-List-for-All.png"
            className="w-[594px] h-[355px] rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to do App!</h1>
            <p className="py-6 text-justify">
            To-do List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom
            </p>
            {user ?<Link to={'/addtask'}><button className="btn btn-primary">Get Started</button></Link>:<Link to={'/login'}><button className="btn btn-primary">Log In</button></Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
