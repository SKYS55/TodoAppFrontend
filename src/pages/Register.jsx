
function Register() {
    return (
        <form className="max-w-sm mx-auto mt-28">
            <div className="mb-5">
                <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                <input type="text" id="username" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Nombre de usuario" required/>
            </div>
            <div className="mb-5">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input type="password" id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Nueva contraseña" required />
            </div>
            <div className="mb-5">
                <label for="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirma contraseña</label>
                <input type="password" id="repeat-password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  placeholder="Nueva contraseña" required />
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label for="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estoy de acuerdo con los<a href="#" className="text-blue-600 hover:underline dark:text-blue-500"> términos y condiciones</a></label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar usuario</button>
        </form>
    )
}

export default Register;
