import '../styles/Login.css';

function Login() {
  return (
    <div className="signin cf">
      <div className="avatar"></div>
      <form>
        <div className="inputrow">
          <input type="text" id="name" placeholder="Usuario" />
          <label className="ion-person" htmlFor="name"></label>
        </div>

        <div className="inputrow">
          <input type="password" id="pass" placeholder="Contraseña" />
          <label className="ion-locked" htmlFor="pass"></label>
        </div>

        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember" className="radio"> Guardar sesión </label>

        <input type="submit" value="Ingresar" />
      </form>
    </div>
  );
}

export default Login;
