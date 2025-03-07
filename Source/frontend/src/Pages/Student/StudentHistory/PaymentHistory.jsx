import React, { useState, useEffect } from "react";
import './History.css';
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/navBar";

function PaymentHistory() {
  // Mẫu dữ liệu

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  const [startDate, setStartDate] = useState(getCurrentDate);
  const [endDate, setEndDate] = useState(getCurrentDate);
  const [filteredPaymentHistory, setFilteredPaymentHistory] = useState([]);
  

  const handleSubmit = async () => {
    const payload = {
      "studentID": window.sessionStorage.getItem("studentID")
    }
  
    try {
      const response = await fetch(`http://localhost:8080/ssps/${window.sessionStorage.getItem("studentID")}/payment-history`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",   
        },
        body: JSON.stringify(payload),
      });
    
      if (response.ok) {
        const data = await response.json();
        if (data.status === "success") {
          // setPaymentHistoryData(data.paymentHistory);
          const filteredData = data.paymentHistory.filter((item) => {
            const paymentDate = new Date(item.paymentDate);
            const start = new Date(startDate);
            const end = new Date(endDate);
            return paymentDate >= start && paymentDate <= end;
          });
          setFilteredPaymentHistory(filteredData);
        }
        else {
          alert("No student found")
        }
    
      } else {
        console.error("Fetch failed:", response.status);
        // alert("Invalid login information!");
      }
    } catch (error) {
      console.log(error)
    }
  }





  // const handleFilter = () => {
  //   console.log(paymentHistoryData)
  //   const filteredData = paymentHistoryData.filter((item) => {
  //     const paymentDate = new Date(item.paymentDate);
  //     const start = new Date(startDate);
  //     const end = new Date(endDate);
  //     console.log(paymentDate)
  //     console.log(start)
  //     console.log(end)
  //     return paymentDate >= start && paymentDate <= end;
  //   });
  //   console.log(filteredData)
  //   setFilteredPaymentHistory(filteredData);
  // };
  
  useEffect(() => {
    handleSubmit();
  }, []);
  
  return (
  <>
    <NavBar></NavBar>
    <div className="history-container">
      <div>
        <table className="history-title-table">
          <tr>
            <button className="notSelected" onClick={() => {window.location.href = "/Student/History"}}>
              <th>LỊCH SỬ IN</th>
            </button>
            <button className="selected" onClick={() => {window.location.href = "/Student/History/Payment"}}>
              <th>LỊCH SỬ THANH TOÁN</th>
            </button>
          </tr>
        </table>
      </div>
      <br />

      {/* Form chọn ngày */}
      <div className="date-filter">
        <label htmlFor="history-begin-date">Từ ngày: </label>
        <input 
          type="date" 
          placeholder="Từ ngày (DD/MM/YYYY)" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          id="history-begin-date"
        />
        <label htmlFor="history-end-date"> đến ngày: </label>
        <input 
          type="date" 
          placeholder="Đến ngày (DD/MM/YYYY)" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
          id="history-end-date"
        />
        <button onClick={handleSubmit}>Lọc</button>
      </div>

      {/* Bảng lịch sử in */}
      <table className="history-table">
        <thead>
          <tr>
            <th>Mã đơn</th>
            <th>Ngaỳ thực hiện</th>
            <th>Số trang</th>
            <th>Số tiền thanh toán</th>
            <th>Trạng thái</th>
            <th>Ghi chú</th>
          </tr>
        </thead>
        <tbody>
          {filteredPaymentHistory.map((item, index) => (
            <tr key={index}>
              <td>{item.paymentID}</td>
              <td>{item.paymentDate}</td>
              <td>{item.pageBought}</td>
              <td>{item.paymentAmount}</td>
              <td>{item.paymentStatus}</td>
              <td>{item.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer></Footer>
    </>
  );
}

export default PaymentHistory;