import { useState, useEffect } from "react";
import "./buypage.css";
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/navBar";

function BuyPages1() {
  const number = 0;
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    const inputValue = document.getElementById("buyPageNumber").value; // Get input value
    if (inputValue) {
      window.sessionStorage.setItem("buyPagesNumber", inputValue); // Save to session storage
      window.location.href = "/Student/BuyPages/2"
      console.log(window.sessionStorage.getItem("buyPagesNumber"))
    } else {
      alert("Please enter the number of pages to buy.");
    }
  }

  const [pageNumer, setPageNumber] = useState(1);
  useEffect(() => {
    setPageNumber(1);
  }, [])

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
          <div className="buypages-form-container">
            <br />
            <table className="BuyPages">
              <tr>
                <th><strong>Số dư tài khoản</strong></th>
                <td>{`${window.sessionStorage.getItem("pageNumber")} trang`}</td>
              </tr>
              <tr>
                <th><strong>Đơn giá mỗi trang</strong></th>
                <td>{`5000 VND/trang`}</td>
                {/* <td>{`${5000 * document.getElementById("buyPageNumber").value} VND`}</td> */}
              </tr>
              <tr>
                <th><strong>Số trang cần mua</strong></th>
                <td><input type="number" name="buyPageNumber" id="buyPageNumber" value={pageNumer} onChange={(e) => {setPageNumber(e.target.value)}}/></td>
              </tr>
            </table>
            <br />
          </div>
          <button className="continue-btn" onClick={handleSubmit}>
            Thanh toán 
            {/* Send data */}
          </button>
          <button className="cancel-btn" type="button" onClick={() => {window.location.href = "/Home"}}>
            Huỷ
          </button>
        </div>


      </div>
      <Footer></Footer>
    </>
  );
}

export default BuyPages1;
