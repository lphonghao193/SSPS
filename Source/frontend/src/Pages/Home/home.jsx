import { useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import Footer from '../../Components/Footer/footer'
import NavBar from '../../Components/NavBar/navBar'

function Home({ studentId }) {
    const role = window.sessionStorage.getItem("role");

  const Info = (isLoggedIn) => {
    console.log(isLoggedIn)
    if (isLoggedIn == "true" && window.sessionStorage.getItem("role") === "HCMUT") {
      return <>
      <a href='/Student/Print/1' className="home-service-card">
        <h2 >In tài liệu</h2>
        <p>Cung cấp dịch vụ hỗ trợ sinh viên in tài liệu trong khuôn viên ĐHBK</p>
      </a >
      <a className="home-service-card" href='/Student/BuyPages/1'>
        <h2 >Mua trang in</h2>
        <p>Mua thêm trang in ngoài những trang in được cung cấp sẵn</p>
      </a>              
      <a className="home-service-card" href='/Student/History'>
        <h2 >Lịch sử</h2>
        <p>Xem lại các đơn in và giao dịch đã thực hiện <br/>&nbsp;</p>
      </a></>
    }  else  if (isLoggedIn == "true" && (window.sessionStorage.getItem("role") === "SPSO" 
    || window.sessionStorage.getItem("role") === "Admin")) {
      return <>
      <a href='/SPSO/Printer' className="home-service-card">
        <h2 >Máy in</h2>
        <p>Thêm, sửa và xoá máy in</p>
      </a >
      <a className="home-service-card" href='/SPSO/System'>
        <h2 >Hệ thống</h2>
        <p>Điều chỉnh số trang và ngày thêm trang</p>
      </a>   
      {role === "Admin"? 
      <a className="home-service-card" href='/admin/accountList'>
        <h2 >Danh sách tài khoản</h2>
        <p>Quản lý tài khoản trong hệ thống<br/>&nbsp;</p>
      </a> :
      <a className="home-service-card" href='/SPSO/History'>
        <h2 >Lịch sử</h2>
        <p>Xem lại các đơn in của học sinh <br/>&nbsp;</p>
      </a> }       
      </>    
    } else {
      return <>
      <a href='' className="home-service-card">
        <h2 >In tài liệu</h2>
        <p>Cung cấp dịch vụ hỗ trợ sinh viên in tài liệu trong khuôn viên ĐHBK</p>
      </a >
      <a className="home-service-card" href=''>
        <h2 >Mua trang in</h2>
        <p>Mua thêm trang in ngoài những trang in được cung cấp sẵn</p>
      </a>              
      <a className="home-service-card" href=''>
        <h2 >Lịch sử</h2>
        <p>Xem lại các đơn in và giao dịch đã thực hiện <br/>&nbsp;</p>
      </a></>
    }

  }

  return (
    <>
    <NavBar></NavBar>
    <div className='home-page wrapper'>


      <div className="home-hero">
        <h1 style={{ "textAlign": "center", "color": "#030391"}}>
          <strong>HỆ THỐNG IN THÔNG MINH</strong>
        </h1>
        <h2><strong>Dịch vụ có sẵn</strong></h2>
        <div className="home-services" style={{ gridAutoFlow: "column"}}>
        {Info(window.sessionStorage.getItem("isLoggedIn"))}
        </div>
        <br />
        <h2><strong>Về chúng tôi</strong></h2>
        <p><strong>Nhóm sinh viên Trường Đại học Bách Khoa - Đại học Quốc gia TPHCM</strong></p>
      </div>

    </div>
    <Footer></Footer>
    </>
  )
}

export default Home
