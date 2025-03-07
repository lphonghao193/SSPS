import { useState } from 'react'
import './buypage.css'
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/navBar";


function BuyPages3() {
    return (
        <>
        <div className='wrapper'>
            <NavBar></NavBar>
            <br />
            <div className="buypages-background-container">
                <div className='title'><i style={{ color: "green",  fontSize: "60px"}} class="bi bi-check-circle"></i></div>
                <div className='title'><strong>THANH TOÁN THÀNH CÔNG <i style={{ color: "black"}} class="bi bi-printer"></i></strong></div>
                <div className='title' style={{ fontSize: "20px", color: "red", padding: 0}}>Mã đơn in: HCMUT101 </div>
                <div className='buyPageInfo'><i style={{ color: "black",  fontSize: "20px"}} className="bi bi-file-earmark-check"></i>
                &nbsp;&nbsp;<span style={{ fontSize: "20px" }}><strong>Thông tin thanh toán</strong></span></div>
                <table className="BuyPages" style={{ height: "100px", borderTop: "1px solid black"}}>
                  <tr>
                    <th><strong>Số trang</strong></th>
                    <td>{window.sessionStorage.getItem("buyPagesNumber")} trang</td>
                  </tr>
                  <tr>
                    <th><strong>Số tiền đã thanh toán</strong></th>
                    <td>{`${window.sessionStorage.getItem("buyPagesNumber") * 5000} VND`}</td>
                  </tr>
                  <tr>
                    <th><strong>Số dư hiện tại</strong></th>
                    <td>{window.sessionStorage.getItem("pageNumber")}</td>
                  </tr>
                </table>
                <button className='continue-btn'onClick={() => {window.location.href='/Student/History/Payment'}}>Lịch sử thanh toán</button> {/*SEND DATA*/}
                <button className='cancel-btn' onClick={() => {window.location.href='/Home'}}>Đóng</button>
            </div>
            <Footer></Footer>
        </div>
        </>
    )

}

export default BuyPages3
