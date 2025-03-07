import React, { useState } from 'react'
import './login.css'
import Footer from '../../Components/Footer/footer'
import NavBar from '../../Components/NavBar/navBar'

function Login() {
  const [loginOption, setLoginOption] = useState("HCMUT");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleLoginOptionChange = (e) => setLoginOption(e.target.value);
  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    const payload = {
      "username": username,
      "password": password,
      "loginOption": loginOption,
    };



    try {
      const response = await fetch("http://localhost:8080/ssps/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",   
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        // Store user information if needed
        window.sessionStorage.setItem("isLoggedIn", true)
        window.sessionStorage.setItem("username", data.username);
        window.sessionStorage.setItem("role", data.role);
        if (data.role === "HCMUT") {
          window.sessionStorage.setItem("studentID", data.studentId);
          window.sessionStorage.setItem("studentEmail", data.studentEmail)
          window.sessionStorage.setItem("studentAddress", data.studentAddress)
          window.sessionStorage.setItem("pageNumber", data.pageNumber)
          window.sessionStorage.setItem("studentName", data.studentName) 
        } else {
          window.sessionStorage.setItem("staffID", data.ID);
          window.sessionStorage.setItem("staffEmail", data.email)
          window.sessionStorage.setItem("staffAddress", data.address)
          window.sessionStorage.setItem("staffName", data.name)
          console.log(window.sessionStorage.getItem("isLoggedIn"));
          console.log(window.sessionStorage.getItem("username"))
          console.log(window.sessionStorage.getItem("role"))
          console.log(window.sessionStorage.getItem("staffID"))
          console.log(window.sessionStorage.getItem("staffEmail"))
          console.log(window.sessionStorage.getItem("staffAddress"))      
        }


        window.location.href = `/Home`;
  
      } else {
        console.error("Login failed:", response.status);
        alert("Invalid login information!");
      }
    } catch (error) {
      // console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <>
      <div className="login-page wrapper">
        <NavBar></NavBar>
        <div className="login-container">
          <br />
          <h1>
            <strong>ĐĂNG NHẬP</strong>
          </h1>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="loginOption"
              style={{ marginRight: "8px", fontSize: "30px", width: "5cm" }}>
              Loại tài khoản
            </label>
            <select
              name="loginOption"
              id="loginOption"
              className="selectLoginOption"
              value={loginOption}
              onChange={handleLoginOptionChange}
            >
              <option value="HCMUT">Đăng nhập với tài khoản HCMUT</option>
              <option value="SPSO">Đăng nhập với tài khoản SPSO</option>
            </select>
            <br />
            <br />
            <label
              htmlFor="username"
              style={{ marginRight: "8px", fontSize: "30px", width: "5cm" }}
            >
              Tên tài khoản
            </label>
            <input
              type="text"
              className="username"
              placeholder="Tên tài khoản"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <br />
            <br />
            <label
              htmlFor="password"
              style={{ marginRight: "8px", fontSize: "30px", width: "5cm" }}
            >
              Mật khẩu
            </label>
            <input
              type="password"
              className="username"
              placeholder="Mật khẩu"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <br />
            <div>
              <button className="confirm-button" type="submit">
                <strong>Đăng nhập</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Login;

