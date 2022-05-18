import React from 'react';

const SocialLogIn = () => {
    return (
        <div>
        <button
        //   onClick={handleSignInWithGoogle}
          className="btn btn-block mb-5  btn-outline"
        >
          Continue with Google
        </button>
        <button className="btn btn-block  btn-outline">
          Continue with Github
        </button>
      </div>
    );
};

export default SocialLogIn;