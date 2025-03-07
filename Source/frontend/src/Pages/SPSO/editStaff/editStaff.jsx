import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./editStaff.css";
import NavBar from '../../../Components/NavBar/navBar';
import Footer from '../../../Components/Footer/footer';

const EditStaff = () => {
  const [staff, setStaff] = useState({
    name: '',
    id: '',
    username: '',
    password: '',
    email: '',
    address: '',
    avatar: '',
    role:''
  });
    const queryParams = new URLSearchParams(location.search); // Read query parameters
    const staffID = queryParams.get('id');
    const navigate = useNavigate();

  const fetchStaff = async()=>{
    try{
        const response = await fetch(`http://localhost:8080/ssps/admin/staffInfo/${staffID}`,{method:'GET'});
        const data = await response.json();
        setStaff(data);
    }catch (err){
        console.log(err);
    }
  }

  useEffect(()=>{
    fetchStaff();
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaff((prevStaff) => ({
      ...prevStaff,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response = await fetch(`http://localhost:8080/ssps/admin/updateStaff`,{
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            }, body: JSON.stringify(staff)
        });
        if (!response.ok) {
            console.log(response);
            return;
        }
    }catch(err){
        console.log(err);
        return;
    }
    console.log(staff);
    navigate(`/admin/accountList`);
  };

  const Delete = async()=>{
    try{
        const response = await fetch(`http://localhost:8080/ssps/admin/deleteStaff/${staffID}`,{
            method: 'Delete',
            headers:{
                'Content-Type':'application/json'
            }, body: JSON.stringify(staff)
        });
        if (!response.ok) {
            console.log(response);
            return;
        }
    }catch(err){
        console.log(err);
        return;
    }
    console.log(staff);
    navigate(`/admin/accountList`);
  }

  return (
    <div>
        <NavBar/>

    <div className="form-container">
      <h2>Cập nhật thông tin nhân viên</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Tên nhân viên:</label>
          <input type="text" id="name" name="name" value={staff.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="id">Mã số nhân viên:</label>
          <input type="text" id="id" name="id" value={staff.id} onChange={handleChange} required readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="username">Tên tài khoản:</label>
          <input type="text" id="username" name="username" value={staff.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input type="password" id="password" name="password" value={staff.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={staff.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="adrress">Địa chỉ:</label>
          <input type="text" id="adrress" name="adrress" value={staff.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar:</label>
          <input type="text" id="avatar" name="avatar" value={staff.avatar} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="role">Chức vụ:</label>
          <input type="text" id="role" name="role" value={staff.role} onChange={handleChange} required readOnly/>
        </div>
        <div className="form-group">
          <button type="submit" className="update-button" >Cập nhật</button>
        </div>
      </form>
      <div className="Delete">
          <button onClick={Delete} className="delete-button" >Xóa tài khoản</button>
        </div>
    </div>
    <Footer/>
    </div>
  );
};

export default EditStaff;
