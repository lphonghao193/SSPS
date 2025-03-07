import React, { useState } from "react";
import './AddAccount.css';
import { useNavigate } from "react-router-dom";
import NavBar from "../../../Components/NavBar/navBar";
import Footer from "../../../Components/Footer/footer";

function AddAccount() {
  // State để lưu thông tin người dùng
  const [accountType, setAccountType] = useState("student");
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    username: '',
    password: '',
    email: '',
    address: '',
    avatar: '',
    pageNumber: '',
    spsId: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
    setFormData({
      id: '',
      name: '',
      username: '',
      password: '',
      email: '',
      address: '',
      avatar: '',
      pageNumber: '',
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (accountType === 'student'){
        try{
            const payLoad = {studentName:formData.name, studentID:formData.id, username:formData.username,
                password:formData.password, studentEmail:formData.email, studentAddress:formData.address,
                avatar: formData.avatar, pageNumber: formData.pageNumber
            }
            const response = await fetch(`http://localhost:8080/ssps/admin/addStudent`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payLoad),
            })
            if (!response.ok) {
                console.log(response);
                return;
            }
        }catch (err){
            console.log(err);
        }
    }else{
        try{
            const role = accountType ==='spso' ? "SPSO" : "Admin";
            const payLoad = {name:formData.name, id:formData.id, username:formData.username,
                password:formData.password, email:formData.email, address:formData.address,
                avatar: formData.avatar,role: role}
            const response = await fetch(`http://localhost:8080/ssps/admin/addStaff`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payLoad),
            })
            if (!response.ok) {
                console.log(response);
                return;
            }
        }catch (err){
            console.log(err);
        }
    }
    navigate (`/admin/accountList`);
  };

  return (
    <div>
        <NavBar/>

        
    <div className="add-account-container">
      <h1>Thêm Tài Khoản Mới</h1>

      {/* Chọn loại tài khoản */}
      <div className="account-type-selector">
        <label>
          <input
            type="radio"
            name="accountType"
            value="student"
            checked={accountType === "student"}
            onChange={handleAccountTypeChange}
          />
          Sinh viên
        </label>
        <label>
          <input
            type="radio"
            name="accountType"
            value="spso"
            checked={accountType === "spso"}
            onChange={handleAccountTypeChange}
          />
          SPSO
        </label>
        <label>
          <input
            type="radio"
            name="accountType"
            value="admin"
            checked={accountType === "admin"}
            onChange={handleAccountTypeChange}
          />
          Admin
        </label>
      </div>

      <form onSubmit={handleSubmit} className="account-form">
            <label>
              ID:
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Họ tên:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Tên tài khoản:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Mật khẩu:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Địa chỉ:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Avatar:
              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleInputChange}
                required
              />
            </label>
            {accountType === "student" ? <label>
              Số trang in:
              <input
                type="number"
                name="pageNumber"
                min = '0'
                value={formData.pageNumber}
                onChange={handleInputChange}
                required
              />
            </label>:""}
        <button type="submit" className="save-button">Lưu</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}

export default AddAccount;
