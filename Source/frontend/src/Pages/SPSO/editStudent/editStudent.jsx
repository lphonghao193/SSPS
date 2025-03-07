import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./editStudent.css";
import NavBar from '../../../Components/NavBar/navBar';
import Footer from '../../../Components/Footer/footer';

const EditStudent = () => {
  const [student, setStudent] = useState({
    studentName: '',
    studentID: '',
    username: '',
    password: '',
    studentEmail: '',
    studentAddress: '',
    avatar: '',
    pageNumber:''
  });
    const queryParams = new URLSearchParams(location.search); // Read query parameters
    const studentID = queryParams.get('id');
    const navigate = useNavigate();

  const fetchStudent = async()=>{
    try{
        const response = await fetch(`http://localhost:8080/ssps/admin/studentInfo/${studentID}`,{method:'GET'});
        const data = await response.json();
        setStudent(data);
    }catch (err){
        console.log(err);
    }
  }

  useEffect(()=>{
    fetchStudent();
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value
    }));
  };

  const Delete = async()=>{
    try{
        const response = await fetch(`http://localhost:8080/ssps/admin/deleteStudent/${studentID}`,{
            method: 'Delete'});
        if (!response.ok) {
            console.log(response);
            return;
        }
    }catch(err){
        console.log(err);
        return;
    }
    console.log(student);
    navigate(`/admin/accountList`);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response = await fetch(`http://localhost:8080/ssps/admin/updateStudent`,{
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            }, body: JSON.stringify(student)
        });
        if (!response.ok) {
            console.log(response);
            return;
        }
    }catch(err){
        console.log(err);
        return;
    }
    console.log(student);
    navigate(`/admin/accountList`);
  };

  return (
    <div>
        <NavBar/>
    <div className="form-container">
      <h2>Cập nhật thông tin sinh viên</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentName">Tên Sinh Viên:</label>
          <input type="text" id="studentName" name="studentName" value={student.studentName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="studentID">Mã số sinh viên:</label>
          <input type="text" id="studentID" name="studentID" value={student.studentID} onChange={handleChange} required readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="username">Tên tài khoản:</label>
          <input type="text" id="username" name="username" value={student.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input type="password" id="password" name="password" value={student.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="studentEmail">Email:</label>
          <input type="email" id="studentEmail" name="studentEmail" value={student.studentEmail} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="studentAddress">Địa chỉ:</label>
          <input type="text" id="studentAddress" name="studentAddress" value={student.studentAddress} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar:</label>
          <input type="text" id="avatar" name="avatar" value={student.avatar} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Số lượng trang:</label>
          <input type='number' id="pageNumber" name="pageNumber" value={student.pageNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="submit">Cập nhật</button>
        </div>
      </form>
      <div className="Delete">
          <button onClick={Delete}>Xóa tài khoản</button>
        </div>
    </div>
    <Footer/>
    </div>
  );
};

export default EditStudent;
