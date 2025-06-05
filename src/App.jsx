import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppLayout from "./layouts/AppLayout";
import Assignments from "./pages/admin/Assignments";

function App() {
  return (
    <Routes path="/">
      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Rutas protegidas o con layout */}
      <Route element={<AppLayout />}>
        <Route path="/admin" element={<Assignments />} />
        {/* Puedes agregar más rutas aquí bajo el layout */}
      </Route>
    </Routes>

  );
}

export default App;
