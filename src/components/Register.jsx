import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import appFirebase from "../firebaseConfig";

import "./Register.css";

const Register = () => {
  const auth = getAuth(appFirebase);

  const handleRegister = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className='app-container'>
      <div className='container'>
        <strong>
          Registrarse con <span className='firebase-register'>Firebase</span>
        </strong>
        <form onSubmit={handleRegister}>
          <div className='inputs-container'>
            <div className='field-container'>
              <label htmlFor='email'>Correo electrónico:</label>
              <input type='text' id='email' />
            </div>
            <div className='field-container'>
              <label htmlFor='password'>Contraseña:</label>
              <input type='password' id='password' />
            </div>
          </div>
          <button className='register-button' type='submit'>
            Confirmar
          </button>
        </form>
        <p className='already-user'>
          ¿Ya eres usuario? <a href='/'>Iniciar sesión</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
