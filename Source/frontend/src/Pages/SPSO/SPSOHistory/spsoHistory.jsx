import React, { useState, useEffect } from "react";
import './spsoHistory.css';
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/navBar";

function SPSOHistory() {
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
  const [filteredPrintHistory, setFilteredPrintHistory] = useState([]);
  
  const handleSubmit = async () => {
  
    try {
      const response = await fetch(`http://localhost:8080/ssps/get-print-history`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",   
        },
      });
       if (!response.ok) {
        const err = await response.json();
        console.log(err);
      } else {
          // setPaymentHistoryData(data.paymentHistory);
        const data = await response.json();
        const filteredData = data.filter((item) => {
        const printDate = new Date(item.printDate);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return printDate >= start && printDate <= end;
          });
        setFilteredPrintHistory(filteredData);
        }
    } catch (error) {
      console.log(error)
    }
  }
  
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
            <button className="selected" onClick={() => {window.location.href = "/SPSO/History"}}>
              <th>LỊCH SỬ IN</th>
            </button>
            <button className="notSelected" onClick={() => {window.location.href = "/SPSO/History/Payment"}}>
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
            <th>Mã đơn in</th>
            <th>Mã sinh viên</th>
            <th>Tên tài liệu</th>
            <th>Ngày thực hiện</th>
            <th>Trạng thái</th>
            <th>Ghi chú</th>
          </tr>
        </thead>
        <tbody>
          {filteredPrintHistory.map((item, index) => (
            <tr key={index}>
              <td>{item.printID}</td>
              <td>{item.studentID}</td>
              <td>{item.fileName}</td>
              <td>{item.printDate}</td>
              <td>{item.printStatus}</td>
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

export default SPSOHistory;