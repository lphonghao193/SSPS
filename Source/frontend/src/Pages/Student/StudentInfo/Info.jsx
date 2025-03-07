import React from "react";
import { FaUser } from "react-icons/fa"; // Importing the user icon
import "./Info.css";
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/navBar";

function StudentInfo() {
  // ví dụ
  const user = {
    name: 'Nguyễn Văn A',
    employeeId: '2255212',
    position: 'Sinh vien',
    email: 'hocsinh1@example.com',
    address: 'Hà Nội, Việt Nam',
    role: 'HCMUT', // Thêm role vào dữ liệu người dùng
    times: 10,
    latestRequest: "17/10/2024",
    pageBalance: 150
  };
  const studentID = window.sessionStorage.getItem("studentID");
  const studentName = window.sessionStorage.getItem("studentName");
  const studentEmail = window.sessionStorage.getItem("studentEmail");
  const studentAddress = window.sessionStorage.getItem("studentAddress");
  const pageNumber = window.sessionStorage.getItem("pageNumber");
  const role = window.sessionStorage.getItem("role") === "HCMUT" ? "Sinh viên" : "SPSO";


  return (
    <>
    <NavBar></NavBar>
    <div className="user-info-container">
      <br />
        <h1 className="info-title">HỒ SƠ NGƯỜI DÙNG</h1>
        <div className="user-info">
        {/* Cột chứa biểu tượng và role */}
        <div className="user-left">
          {/* Biểu tượng người dùng */}
          <div className="user-icon">
            <FaUser size={50} color="#fff" />
          </div>
          {/* Dòng "Role" */}
          <div className="user-role">
            <p>{window.sessionStorage.getItem("role") === "HCMUT" ? "Sinh viên" : "SPSO"}</p>
          </div>
        </div>  

        {/* Cột chứa thông tin người dùng */}
        <div className="user-right">
          <h2>{window.sessionStorage.getItem("studentName")}</h2>
          <p><strong>Mã số sinh viên:</strong> {window.sessionStorage.getItem("studentID")}</p>
          <p><strong>Chức vụ:</strong> {(window.sessionStorage.getItem("role") === "HCMUT" ? "Sinh viên" : "SPSO")}</p>
          <p><strong>Email:</strong> {window.sessionStorage.getItem("studentEmail")}</p>
          <p><strong>Địa chỉ:</strong> {window.sessionStorage.getItem("studentAddress")}</p>
        </div>
    

        {/* Cột chứa thông tin người dùng */}
        <div className="user-right">
          <h2>Thông tin in ấn</h2>
          <p><strong>Số lần in:</strong> {user.times}</p>
          <p><strong>Lần in gần nhất:</strong> {user.latestRequest}</p>
          <p><strong>Số giấy còn lại:</strong> {window.sessionStorage.getItem("pageNumber")}</p>
          <p><strong></strong></p>
        </div>
      </div>

      {/* Nút đăng xuất */}
      <button className="logout-button" onClick={() => {
        window.sessionStorage.setItem("studentID", "");
        window.sessionStorage.setItem("username", "");
        window.sessionStorage.setItem("role", "");
        window.sessionStorage.setItem("isLoggedIn", false)
        window.location.href = "/Home"
      }}>Đăng xuất</button>
    </div>
    <Footer></Footer>
    </>
  );
}

export default StudentInfo;