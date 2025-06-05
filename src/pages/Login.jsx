import { isAxiosError } from 'axios';
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

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

  const handleLogin = async (formData) => {
    try {
      const { data } = await postLogin(formData);
      localStorage.setItem('AUTH_TOKEN', data);
      navigation('/admin');
    } catch (error) {
      if (isAxiosError(error) && error.message) {
        // Handle the error, e.g., show a toast notification
        console.error(error.response?.data.error);
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl text-gray-500">
            👤
          </div>
        </div>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          {/* Usuario */}
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
              Usuario
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Usuario"
              {...register('userName', { required: 'El nombre de usuario es requerido' })}
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.userName && (
              <p className="text-sm text-red-600 mt-1">{errors.userName.message}</p>
            )}
          </div>

          {/* Contraseña */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              {...register('password', { required: 'La contraseña es requerida' })}
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Recordarme */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
              Guardar sesión
            </label>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Ingresar
          </button>
        </form>

        <Toaster />
      </div>
    </div>
  );
}

export default Login;