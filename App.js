import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';

function App() {
  const path = window.location.pathname;

  if (path === "/register") return <Register />;
  if (path === "/dashboard") return <Dashboard />;
  return <Login />;
}

export default App;