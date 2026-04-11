import { useContext, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  const [page, setPage] = useState("login");

  if (user) return <Dashboard />;

  return (
    <div>
      <button onClick={() => setPage("login")}>Login</button>
      <button onClick={() => setPage("register")}>Register</button>

      {page === "login" && <Login />}
      {page === "register" && <Register />}
    </div>
  );
}

export default App;