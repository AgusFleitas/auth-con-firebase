/* eslint-disable react/prop-types */
import { getAuth, signOut } from "firebase/auth";
import appFirebase from "../firebaseConfig";

import "./NavBar.css";

const NavBar = ({ userData }) => {
  const auth = getAuth(appFirebase);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className='bar-container'>
      {userData ? (
        <p className='cheer'>
          Hello <strong>{userData.email}</strong> !
        </p>
      ) : (
        <p>Please Login</p>
      )}
      {userData ? (
        <button className='logout-button' onClick={handleLogout}>
          Log Out
        </button>
      ) : null}
    </div>
  );
};

export default NavBar;
