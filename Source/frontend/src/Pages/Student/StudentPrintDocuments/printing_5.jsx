import { useState } from 'react'
import './printing.css'
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/navBar";


function PrintingPage5() {
    return (
        <>
        <div className='wrapper'>
            <NavBar></NavBar>
            <br />
            <div className="buypages-background-container">
                <div className='title'><i style={{ color: "green",  fontSize: "60px"}} class="bi bi-check-circle"></i></div>
                <div className='title'><strong>ĐÃ TẠO ĐƠN IN THÀNH CÔNG <i style={{ color: "black"}} class="bi bi-printer"></i></strong></div>
                <div className='title' style={{ fontSize: "20px", color: "red", padding: 0}}>Mã đơn in: HCMUT101 </div>
                <div className='buyPageInfo'><i style={{ color: "black",  fontSize: "30px"}} className="bi bi-file-earmark-check"></i>
                &nbsp;&nbsp;<span style={{ fontSize: "30px" }}><strong>Thông tin chi tiết</strong></span></div>
                <table className="BuyPages" style={{ height: "100px", borderTop: "1px solid black"}}>
                  <tr>
                    <th><strong>Tên tài liệu</strong></th>
                    <td>{JSON.parse(window.sessionStorage.getItem("files"))[0]}</td>
                  </tr>
                  <tr>
                    <th><strong>Số trang</strong></th>
                    <td>20</td>
                  </tr>
                  <tr>
                    <th><strong>Thời gian in dự kiến</strong></th>
                    <td>01 - 01 - 2025 12:00:00 PM</td>
                  </tr>
                  <tr>
                    <th><strong>Nhận tài liệu tại</strong></th>
                    <td>Văn phòng Khoa KH-KTMT</td>
                  </tr>
                </table>
                <button className='continue-btn'onClick={() => {window.location.href='/Student/History'}}>Lịch sử in</button> {/*SEND DATA*/}
                <button className='cancel-btn' onClick={() => {window.location.href='/Home'}}>Đóng</button>
            </div>
            <Footer></Footer>
        </div>
        </>
    )

}

export default PrintingPage5
