import { isAxiosError } from 'axios';
import '../styles/Login.css';
import { useForm } from 'react-hook-form';
import { postLogin } from '../api/AuthAPI';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'sonner';

function Login() {

  const navigation = useNavigate();

  const initialValues = {
    userName: '',
    password: ''
  };

  const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: initialValues });

  const handleLogin = async (formData) => {
      try {
        const { data } = await postLogin(formData);
        localStorage.setItem('AUTH_TOKEN', data);
        navigation('/admin');
      } catch (error) {
        if(isAxiosError(error) && error.message) {
          // Handle the error, e.g., show a toast notification
          console.error(error.response?.data.error);
        }
      }
  }

  return (
    <div className="signin cf">
      <div className="avatar"></div>
      <form onSubmit={handleSubmit(handleLogin)} className="signin-form">
        <div className="inputrow">
          <input 
            type="text" id="userName" 
            placeholder="Usuario" 
            {...register('userName', { required: 'El nombre de usuario es requerido' })}
          
          />
          <label className="ion-person" htmlFor="userName"></label>
          {errors.userName && (
              <ErrorMessage>{errors.userName.message}</ErrorMessage>
          )}
        </div>

        <div className="inputrow">
          <input 
            type="password" 
            id="password" 
            placeholder="Contraseña" 
              {...register('password', { required: 'El nombre de usuario es requerido' })}
          />
          <label className="ion-locked" htmlFor="password"></label>
          {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember" className="radio"> Guardar sesión </label>

        <input type="submit" value="Ingresar" />
      </form>
      <Toaster />
    </div>
  );
}

export default Login;