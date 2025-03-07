import React, { useEffect, useState } from 'react';
import './Acclist.css';
import { Link } from 'react-router-dom';
import NavBar from '../../../Components/NavBar/navBar';
import Footer from '../../../Components/Footer/footer';

const Acclist = () => {
  // Danh sách tài khoản mẫu
    const [students, setStudents] = useState([]);
    const [staffs,setStaffs] = useState([]);

    const fetchStudents = async() =>{
        try{
            const response = await fetch(`http://localhost:8080/ssps/admin/studentAccountList`,{method:'GET'})
            const data = await response.json();
            setStudents(data);
        }catch (err){
            alert("Fetching Student's error");
            console.log(err);
        }
    }

    const fetchStaffs = async() =>{
        try{
            const response = await fetch(`http://localhost:8080/ssps/admin/staffAccountList`,{method:'GET'})
            const data = await response.json();
            setStaffs(data);
        }catch (err){
            alert("Fetching Staff's error");
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchStaffs();
        fetchStudents();
    },[]);

  return (
    <div>
        <NavBar/>
        
    <div className="acclist-container">
      <h1>Danh Sách Tài Khoản</h1>
      <table className="acclist-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và tên</th>
            <th>Địa chỉ mail</th>
            <th>Chức vụ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.studentID}>
              <td>{student.studentID}</td>
              <td>{student.studentName}</td>
              <td>{student.studentEmail}</td>
              <td>Student</td>
              <td>
                <Link to = {`/admin/editStudent?id=${student.studentID}`}><button className="view-btn">Xem chi tiết</button></Link>
              </td>
            </tr>
          ))}
          {staffs.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.email}</td>
              <td>{staff.role}</td>
              <td>
                <Link to = {`/admin/editStaff?id=${staff.id}`}><button className="view-btn">Xem chi tiết</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-account-btn">
        <Link to={`/admin/addAccount`}><button>Thêm tài khoản</button></Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Acclist;
