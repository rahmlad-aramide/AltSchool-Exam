import React, { useContext, useEffect } from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp,
// } from "react-icons/fa";
import { ThemeContext } from "../Context";
import {getRedirectResult, auth, GoogleAuthProvider, signInWithRedirect, provider} from '../config'
import { useState } from "react";
const Home = ({darkMode}) => {
  const theme = useContext(ThemeContext)
  const color = darkMode? theme.dark : theme.light;
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState('');
  const handleSignin = (e)=> {
      e.preventDefault();
      signInWithRedirect(auth, provider)
  }
  const handleSignout = (e)=> {
      e.preventDefault();
      auth.signOut().then(()=>alert("We're sorry to let you go"))
      setSignedIn(false)
  }
  useEffect(()=>{
    getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      if (result) {
        setSignedIn(true);
        setUser(user);
        alert(`Welcome to connectify ${user.displayName}`)
      }
      console.log("result", result);
      console.log("credential", credential);
      console.log("user", user);
    })
      // .catch((error) => {
      // // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      // }); 
  }, []);
  return (
    <section className={`flex bg-${color.background} h-[calc(100vh_-_4rem)] text-${color.foreground} transition duration-500`}>
      <div className="my-auto w-full">
        <div className="w-full h-[60vh] text-center flex justify-center items-end px-8">
          <img src={darkMode? `images/connectWhite.svg`: `images/connectBlack.svg`} alt="Connect" className="h-[50vh]"/>
        </div>
        <div className="h-[20vh]">
          <h1 className="text-2xl font-bold pt-4 pb-1 text-center">Connectify</h1>
          {!signedIn? 
          (<>
            <h3 className="mx-4 md:mx-20 text-center">Sign in to connect and make new friends with people across the globe</h3>
            <div className="flex justify-center">
              <button onClick={handleSignin} className={`border px-12 py-1.5 mt-4 rounded-lg hover:scale-90 transition duration-500 border-white text-${color.foreground} font-bold bg-[#F9BA48]`}>Sign In</button>
            </div>
          </>)
          : (<>
            <h3 className="mx-4 md:mx-20 text-center">Signed in as {user.displayName}, start making friends</h3>
            <div className="flex justify-center">
              <button onClick={handleSignout} className={`border px-12 py-1.5 mt-4 rounded-lg hover:scale-90 transition duration-500 border-white text-${color.foreground} font-bold bg-[#F9BA48]`}>Sign Out</button>
            </div>
          </>)
        }
        
          
        </div>
      </div>
      
    </section>
  );
};

export default Home;
