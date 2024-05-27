import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import appFirebase from "../firebaseConfig";

import "./Login.css";

const Login = () => {
  const auth = getAuth(appFirebase);

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    await signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <div className='app-container'>
      <div className='container'>
        <strong>
          Iniciar sesión con <span className='firebase'>Firebase</span>
        </strong>
        <form onSubmit={handleLogin}>
        <div className='inputs-container'>
          <div className='field-container'>
            <label htmlFor='email'>Correo electrónico:</label>
            <input type='text' id="email"/>
          </div>
          <div className='field-container'>
            <label htmlFor='password'>Contraseña:</label>
            <input type='password' id="password"/>
          </div>
        </div>
        <button className='login-button' type="submit">Confirmar</button>
        </form>
        <p className='not-user'>
          ¿Aún no tienes una cuenta? <a href='/register'>Crear una cuenta</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
