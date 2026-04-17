import { useState } from "react";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("Login Successful");

      window.location.href = "/dashboard";
    } else {
      alert(data.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input placeholder="Email"
        onChange={e => setForm({...form, email: e.target.value})} /><br /><br />

      <input type="password" placeholder="Password"
        onChange={e => setForm({...form, password: e.target.value})} /><br /><br />

      <button type="submit">Login</button>

      <p onClick={() => window.location.href = "/register"} style={{cursor:"pointer"}}>
        Go to Register
      </p>
    </form>
  );
}

export default Login;