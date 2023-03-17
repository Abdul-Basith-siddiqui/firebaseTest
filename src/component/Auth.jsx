import React from "react";
import { auth, googelProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export function Auth() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLOggedIn, setIsLoggedIn] = React.useState(false);
  console.log(auth?.currentUser?.email);
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
    } catch (e) {
      console.error(e);
    }
  };

  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googelProvider);
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth, googelProvider);
      setIsLoggedIn(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {isLOggedIn ? <h1>you are logged in</h1> : <h1>you are not logged in</h1>}

      <input
        placeholder="email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>click me</button>
      <button onClick={signInGoogle}>sign in with Google</button>
      <button onClick={logOut}>logout</button>
    </div>
  );
}

// export default Auth;
