import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa"; // Importing the user icon
import "./Info.css";
import NavBar from "../../../Components/NavBar/navBar";
import Footer from "../../../Components/Footer/footer";

function SPSOInfo() {
    const [staff, setStaff] = useState ([]);
    
    const fetchUser = async () =>{
        const id = window.sessionStorage.getItem("staffID");
        console.log(id);
        try{
            const response = await fetch(`http://localhost:8080/ssps/admin/staffInfo/${id}`,{
                method: 'GET'
            });
            if (!response.ok){
                const errorData = await response.json(); 
                console.error('HTTP error:', errorData); 
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setStaff(data); 
        }
        catch (err){
            console.error(err.message);
        }
    }

    useEffect(()=>{
        fetchUser();
    })

  return (
    <div>
        <NavBar/>
    <div className="user-info-container">
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
            <p>{staff.role}</p>
          </div>
        </div>

        {/* Cột chứa thông tin người dùng */}
        <div className="user-right">
          <h2>{staff.name}</h2>
          <p><strong>Mã số nhân viên:</strong> {staff.id}</p>
          <p><strong>Chức vụ:</strong> {staff.role}</p>
          <p><strong>Email:</strong> {staff.email}</p>
          <p><strong>Địa chỉ:</strong> {staff.address}</p>
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
    <Footer/>
    </div>
  );
}

export default SPSOInfo;