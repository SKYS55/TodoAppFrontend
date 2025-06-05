import { Outlet } from "react-router-dom";



export default function AppLayout() {

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl">My Application</h1>
            </header>
            <main className="flex-grow container mx-auto p-4">
                <Outlet/>
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                &copy; {new Date().getFullYear()} My Application
            </footer>
        </div>
    );
}