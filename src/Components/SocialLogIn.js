import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const SocialLogIn = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const navigate = useNavigate()
  const location = useLocation();
  let from = location.state?.from?.pathname || '/'
  useEffect(()=>{
    if(user){
      navigate(from, {replace: true})
    }
  },[from,navigate, user])

  

  const handleSignInWithGoogle=()=>{
    signInWithGoogle()
  }
    return (
        <div>
        <button
          onClick={handleSignInWithGoogle}
          className="btn btn-block mb-5  btn-outline"
        >
          Continue with Google
        </button>
      </div>
    );
};

export default SocialLogIn;