// Import the react JS packages
import axios from "axios";
import { useState } from "react";
import { rootAddress } from "../data";
// Define the Login function.
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Create the submit method.
  const submit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    // Create the POST requuest
    const { data } = await axios.post(
      rootAddress + "token/",
      user,
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );

    // Initialize the access & refresh token in sessionStorage.
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
    sessionStorage.setItem("access_token", data.access);
    sessionStorage.setItem("refresh_token", data.refresh);
    console.log(sessionStorage.getItem('access_token'), sessionStorage.getItem('refresh_token'))
    sessionStorage.setItem("user", user.username);

    axios.defaults.headers.common["Authorization"] = `Bearer ${data["access"]}`;
    window.location.reload();
    window.location.href = "/home";
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              className="form-control mt-1"
              placeholder="Enter Username"
              name="username"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-primary">
              Skip
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
