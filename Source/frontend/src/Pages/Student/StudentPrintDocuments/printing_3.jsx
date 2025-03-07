import { useState, useEffect } from 'react'
import './printing.css'
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/navBar";


function PrintingPage3() {

    const [printerList, setPrinterList] = useState([])

    const handleSubmit = () => {
        const selectedPrinter = document.querySelector('input[name="printing-choose-printer"]:checked')
        if (!selectedPrinter) {
            alert("Hãy chọn 1 máy in!")
        } else {
            window.location.href = '/Student/Print/4'
        }
    }

    const requestPrinter = async () => {
        try {
            const response = await fetch(`http://localhost:8080/ssps/spso/printerList`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",   
            },
            body: ""
            });
            if (response.ok) {
                const data = await response.json();

                if (data.status === "success" && data.printerList.length > 0) {
                    setPrinterList(data.printerList)
                    console.log(printerList)
                } else {
                    alert("No printer available now!")
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
        requestPrinter()
    }, [])

    return (
        <>
        <NavBar></NavBar>
        <div className='wrapper'>
        <br />
        <div className='printing-background-container'>
            <div className='title'><strong>CHỌN MÁY IN <i style={{ color: "black"}} className="bi bi-printer"></i></strong></div>
            <br />
                <div className="printing-form-container">
                    {printerList.map((printer, index) => (
                        <div className='printing-printer' key={index}>
                            <div className='printing-printer-left'>
                                <h5>{printer.printerID} {printer.brand}</h5>
                                <span style={{ color: "green" }}>(Đang sẵn sàng)</span>
                                <p>{printer.location}</p>
                            </div>
                            <div className='printing-printer-right'>
                                <input type="radio" className='btn-check printing-printer-radio' name='printing-choose-printer' id={`printing-printer-${index}`} value={printer.printerID} required/>
                                <label className="btn btn-outline-success" htmlFor={`printing-printer-${index}`}>Chọn máy in {printer.printerID}</label>
                            </div>
                        </div>
                    ))}

                    {/* <div className='printing-printer'>
                        <div className='printing-printer-left'>
                            <h5>01 - Canon <span style={{ color: "green" }}>(Đang sẵn sàng)</span></h5>
                            <p>Tòa A4 - Cơ sở Lý Thường Kiệt</p>
                        </div>
                        <div className='printing-printer-right'>
                            <input type="radio" className='btn-check printing-printer-radio' name='printing-choose-printer' id='printing-printer-1' value="1" required/>
                            <label className="btn btn-outline-success" htmlFor="printing-printer-1">Chọn máy in 1</label>
                        </div>
                    </div>
                    <br />
                    <div className='printing-printer'>
                        <div className='printing-printer-left'>
                            <h5>02 - Panasonic <span style={{ color: "green" }}>(Đang sẵn sàng)</span></h5>
                            <p>Tòa B4 - Cơ sở Lý Thường Kiệt</p>
                        </div>
                        <div className='printing-printer-right'>
                            <input type="radio" className='btn-check printing-printer-radio' name='printing-choose-printer' value="2"  id='printing-printer-2'/>
                            <label className="btn btn-outline-success" htmlFor="printing-printer-2">Chọn máy in 2</label>
                        </div>
                    </div>

                    <br />
                    <div className='printing-printer'>
                        <div className='printing-printer-left'>
                            <h5>03 - HP <span style={{ color: "green" }}>(Đang sẵn sàng)</span></h5>
                            <p>Tòa B1 - Cơ sở Lý Thường Kiệt</p>
                        </div>
                        <div className='printing-printer-right'>
                            <input type="radio" className='btn-check printing-printer-radio' name='printing-choose-printer' value="3"  id='printing-printer-3'/>
                            <label className="btn btn-outline-success" htmlFor="printing-printer-3">Chọn máy in 3</label>
                        </div>
                    </div> */}
                </div>
            <br /><br /> <br />
            <button className='continue-btn' type='button' onClick={handleSubmit}> Tiếp tục </button>
            <button className='cancel-btn' onClick={() => {window.location.href = '/Student/Print/2'}}>Quay lại</button>
            </div>
        </div>
        <Footer></Footer>
        </>
    )

}

export default PrintingPage3
