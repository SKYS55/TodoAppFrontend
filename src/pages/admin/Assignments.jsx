

export default function Assignments() {

    return (
        <>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" class="px-6 py-3">Tarea</th>
                            <th scope="col" class="px-6 py-3">Prioridad</th>
                            <th scope="col" class="px-6 py-3">Estado</th>
                            <th scope="col" class="px-6 py-3">Fecha límite</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Preparar informe mensual
                            </th>
                            <td class="px-6 py-4">
                                Alta
                            </td>
                            <td class="px-6 py-4">
                                En progreso
                            </td>
                            <td class="px-6 py-4">
                                10/06/2025
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Reunión con el equipo de desarrollo
                            </th>
                            <td class="px-6 py-4">
                                Media
                            </td>
                            <td class="px-6 py-4">
                                Pendiente
                            </td>
                            <td class="px-6 py-4">
                                08/06/2025
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Revisar solicitudes de soporte
                            </th>
                            <td class="px-6 py-4">
                                Baja
                            </td>
                            <td class="px-6 py-4">
                                Completado
                            </td>
                            <td class="px-6 py-4">
                                05/06/2025
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </>
    )
}