import { useState, useEffect} from 'react'
import './printing.css'
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/navBar";


function PrintingPage4() {
    const [sumPages, setSumPages] = useState(0)
    const records = () => {
        let result = ""
        fileLists = JSON.parse(window.sessionStorage.getItem("files"))
        for (let i = 0; i < fileLists.length; i++) {
            result += ""
        }
    }
    console.log(window.sessionStorage.getItem("printingPrinter"))
    const handleSubmit = async () => {
        const payload = {
            "fileName": JSON.parse(window.sessionStorage.getItem("files"))[0],
            "pageType": window.sessionStorage.getItem("printingPageSize"),
            "printerID": window.sessionStorage.getItem("printingPrinter"),
            "twoFace": window.sessionStorage.getItem("printingPagePerSheet") === "1" ? false : true,
            "color": window.sessionStorage.getItem("printingPageColor") === "1" ? false : true,
            "pageToPrint": window.sessionStorage.getItem("printingPagesList"),
            "numberOfCopy": window.sessionStorage.getItem("printingCopies")
        }

        try {
            const response = await fetch(`http://localhost:8080/ssps/${window.sessionStorage.getItem("studentID")}/print`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",   
            },
            body: JSON.stringify(payload),
            });
            console.log(response)
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                if (data.status == "success") {
                    window.sessionStorage.setItem("pageNumber", window.sessionStorage.getItem("pageNumber") - sumPages);
                    window.location.href = "/Student/Print/5"
                } else {
                    alert("Not enough balance")
                }
        
            } else {
                console.error("failed:", response.status);
                // alert("Invalid login information!");
            }
        } catch (error) {
            // console.error("Error:", error);
            // Handle error
        }
    }

    useEffect(() => {
        setSumPages(JSON.parse(window.sessionStorage.getItem("printingPagesList")).length * 
                            Number(window.sessionStorage.getItem("printingCopies")) * 
                            (window.sessionStorage.getItem("printingPageSize") === "1" ? 2 : 1))
    }, [])

    return (
        <>
        <div className='wrapper'>
        <NavBar></NavBar>
        <br />
            <div className='printing-background-container'>
            <div className='title'><strong>THÔNG TIN ĐƠN IN <i style={{ color: "black"}} class="bi bi-file-earmark"></i></strong></div>
            <div className='title' style={{ fontSize: "20px", color: "red", padding: 0}}>Vui lòng kiểm tra trước khi xác nhận </div>
            <br />
            <div className="printing-form-container">
                <table className="Printing" style={{ height: "100px", width: "100%", border: "1px solid black"}}>
                  <tr>
                    <th><strong>TÊN TÀI LIỆU ĐẶT IN</strong></th>
                    <th><strong>SỐ TRANG</strong></th>
                    <th><strong>SỐ LƯỢNG</strong></th>
                    <th><strong>LOẠI</strong></th>
                    <th><strong>TỔNG</strong></th>
                    <th><strong></strong></th>
                  </tr>
                  {
                    JSON.parse(window.sessionStorage.getItem("files")).map((item, index) => (
                    <tr key={index}>
                        <td>{item}</td>
                        <td>{JSON.parse(window.sessionStorage.getItem("printingPagesList")).length}</td>
                        <td>{window.sessionStorage.getItem("printingCopies")}</td>
                        <td>{
                            window.sessionStorage.getItem("printingPageSize") === "1" ?
                            "A3" : "A4"
                            }</td>
                        <td>{JSON.parse(window.sessionStorage.getItem("printingPagesList")).length * 
                            Number(window.sessionStorage.getItem("printingCopies")) * 
                            (window.sessionStorage.getItem("printingPageSize") === "1" ? 2 : 1)}</td>
                        <td><button style = {{ color: "red", background: "none", border: "none" }}><i class="bi bi-trash-fill"></i></button></td>
                    </tr>
                    ))
                  }
                  </table>
                  <br />

                  <table style={{ width: "100%", height: "100px"}}>
                  <tr>
                    <th><strong>TỔNG CỘNG</strong></th>
                    <td>{`${sumPages} trang`}</td>
                  </tr>
                  <tr>
                    <th><strong>SỐ DƯ</strong></th>
                    <td>{window.sessionStorage.getItem("pageNumber")}</td>
                  </tr>
                </table>
            
            <br />
            <br />
            <br />
            <button className='continue-btn' onClick={handleSubmit}>Tiếp tục</button>
            <button className='cancel-btn' onClick={() => {
                window.location.href = "/Student/Print/3"
            }}>Quay lại</button>
           </div> 
        </div>
        <Footer></Footer>
        </div>
        </>
    )

}

export default PrintingPage4
