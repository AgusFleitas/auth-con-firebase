import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

import appFireBase from "./firebaseConfig";
import "./App.css";

function App() {
  const auth = getAuth(appFireBase);
  const navigate = useNavigate();
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFireBase) => {
      if (userFireBase) {
        setUser(userFireBase);
        navigate('/home')
      } else {
        setUser(null);
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [auth, navigate])


  return (
    <div className='app'>
      <NavBar userData={user}/>
      <h1>
        Authentication with Fire<span className='title-color'>base</span>
      </h1>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={user ? <Home userEmail={user.email} /> : <Login />} />
        <Route path="*" element={user ? <Home userEmail={user.email} /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
