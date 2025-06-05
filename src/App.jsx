import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/"element={<Login/>}/>
        <Route path="/login" element={<Login />} />
        {/* Add other routes here as needed */}
      </Routes>
    </div>
  );
}

export default App;
