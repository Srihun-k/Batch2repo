function Dashboard() {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/";
    return null;
  }

  return (
    <div>
      <h1>Welcome to KITSW Dashboard </h1>

      <button onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/";
      }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;