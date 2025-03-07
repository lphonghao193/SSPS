import { useState } from "react";
import "./buypage.css";
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/navBar";

function BuyPages1() {
  const [fileList, setFileList] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");

  const number = 10
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    window.sessionStorage.setItem("pageNumber", Number(window.sessionStorage.getItem("buyPagesNumber")) + Number(window.sessionStorage.getItem("pageNumber")) )
    // update to database

    const payment = {
      "paymentStatus": "COMPLETED",
      "paymentID": "HCMUT001",
      "studentID": window.sessionStorage.getItem("studentID"),
      "pageBought": window.sessionStorage.getItem("buyPagesNumber"),
      "paymentAmount": window.sessionStorage.getItem("buyPagesNumber") * 5000,
      "paymentDate": "08/12/2024",
      "receipt": ""
    }
    console.log(payment)
    try {
      const response = await fetch(`http://localhost:8080/ssps/${window.sessionStorage.getItem("studentID")}/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",   
        },
        body: JSON.stringify(payment),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)

  
      } else {
        console.error("Failed:", response.status);
        // alert("Fail to update!");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
    window.location.href = "/Student/BuyPages/3"
  }

  return (
    <>
      <NavBar></NavBar>
      <div className="wrapper">
        <br />
        <div className="buypages-background-container">
          <div className="title">
            <strong>
              MUA TRANG IN{" "}
              <i style={{ color: "black" }} className="bi bi-bag-check-fill"></i>
            </strong>
          </div>
          <br />
        <div className="buypages-form-container">
          <table className="BuyPages" style={{ height: "150px" }}>
            <tr>
              <th><strong>Số trang cần mua</strong></th>
              <td>{window.sessionStorage.getItem("buyPagesNumber")} trang</td>
            </tr>
            <tr>
              <th><strong>Số tiền cần thanh toán</strong></th>
              <td>{`${window.sessionStorage.getItem("buyPagesNumber") * 5000} VND`}</td>
            </tr>
          </table>
          </div>
          <div style={{ justifyContent: "center", textAlign: "center" }}>
            <p>Quét mã QR để thanh toán</p>
            <div style={{ marginLeft: "45%", width: "100px", height: "100px", backgroundColor: "black", marginBottom: "5px" }}></div>
            <p>Mã thanh toán sẽ hết hạn trong 10:00</p>
          </div>

          <button className="continue-btn" onClick={handleSubmit}>
            Xác nhận 
            {/* Send data */}
          </button>
          <button className="cancel-btn" type="button" onClick={() => {window.location.href = "/Student/BuyPages/1"}}>
            Quay lại
          </button>
          
        </div>

      </div>
      <Footer></Footer>
    </>
  );
}

export default BuyPages1;
