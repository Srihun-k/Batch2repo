import { useState } from "react";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registered Successfully");
      window.location.href = "/";
    } else {
      alert(data.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input placeholder="Name"
        onChange={e => setForm({...form, name: e.target.value})} /><br /><br />

      <input placeholder="Email"
        onChange={e => setForm({...form, email: e.target.value})} /><br /><br />

      <input type="password" placeholder="Password"
        onChange={e => setForm({...form, password: e.target.value})} /><br /><br />

      <button type="submit">Register</button>

      <p onClick={() => window.location.href = "/"} style={{cursor:"pointer"}}>
        Go to Login
      </p>
    </form>
  );
}

export default Register;
