import { useState } from 'react'
import './printing.css'
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/navBar";


function PrintingPage2() {
    const [pageCopies, setPageCopies] = useState(1);
    const [pagesToPrint, setPagesToPrint] = useState("1");

    const handleSubmit = () => {

        window.sessionStorage.setItem("printingPageSize", document.getElementById("print-page-size").value)
        window.sessionStorage.setItem("printingPagePerSheet", document.getElementById("print-page-per-sheet").value)
        window.sessionStorage.setItem("printingPageColor", document.getElementById("print-page-color").value)
        window.sessionStorage.setItem("printingCopies", document.getElementById("print-copy").value)
        let pageList = [];
        const customPagesInput = document.getElementById("print-custom-pages");
        if (customPagesInput.value.trim()) {document.getElementById("pages-to-print").value = "4"}
        if (document.getElementById("pages-to-print").value === "4") {
            if (!customPagesInput.value.trim()) {
                alert("Please enter custom pages to print!");
                customPagesInput.focus();
                return;
            }
            pageList = document.getElementById("print-custom-pages").value.split(',')
        } else if (document.getElementById("pages-to-print").value === "3") {
            pageList = [2,4,6,8,10,12,14,16,18];
        } else if (document.getElementById("pages-to-print").value === "2") {
            pageList = [1,3,5,7,9,11,13,15,17,19];
        } else {
            pageList = [1,2,3,4,5,6,7,8,9,0,11,12,13,14,15,16,17,18,19,20]
        }
    
        window.sessionStorage.setItem("printingPagesList", JSON.stringify(pageList));


        window.location.href = "/Student/Print/3"
    }

    return (
        <>
        <div className='wrapper'>
        <NavBar></NavBar>
        <br />

        <div className='printing-background-container'>
            <div className='title'><strong>ĐỊNH DẠNG IN <i style={{ color: "black"}} className="bi bi-file-earmark-text"></i></strong></div>
            <br />
            <div className="printing-form-container">
            <br />
            <table className="printing-setup" style={{ width: "70%" }}>

              <tr>
                <th><label htmlFor="print-page-size">Khổ giấy*</label></th>
                <td><select name="page-size" id="print-page-size" required>
                                        <option value="1">A3</option>
                                        <option value="2" selected>A4</option>
                        </select><br />
                </td>
              </tr>

              <tr>
                <th><label className='left-label' htmlFor="print-page-per-sheet">In 1 mặt/In 2 mặt*</label></th>
                <td><select name="page-per-sheet" id="print-page-per-sheet" required>
                                    <option value="1">In 1 mặt</option>
                                    <option value="2" selected>In 2 mặt</option>
                        </select></td>
              </tr>

              <tr>
                <th><label className='left-label' htmlFor="print-page-color">In trắng đen/In màu*</label></th>
                <td><select name="page-color" id="print-page-color" required>
                                <option value="1" selected>In trắng đen</option>
                                <option value="2">In màu</option>
                        </select></td>
              </tr>
              
              <tr>
                <th><label className='left-label' htmlFor="print-pages">Trang cần in*</label></th>
                <td>    
                    <select name="pages-to-print" id="pages-to-print">
                        <option value="1" selected> In toàn bộ</option>
                        <option value="2" > In trang lẻ</option>
                        <option value="3" > In trang chẵn</option>
                        <option value="4" > Tuỳ chọn</option>
                    </select>   
                </td>
              </tr>
              <tr>
                <th><label className='left-label' htmlFor="print-copy">Trang tuỳ chỉnh</label></th>
                <td><input type="text" name="print-custom-pages" id="print-custom-pages" placeholder='e.g 1,2,3,5,6'/></td>
              </tr>
              <tr>
                <th><label className='left-label' htmlFor="print-copy">Số bản in*</label></th>
                <td><input type="number" name="print-copy" id="print-copy" required value={pageCopies} onChange={(e) => {setPageCopies(e.target.value)}}/></td>
              </tr>
            </table>
            <br />
          </div>

                        
            <button className='continue-btn' onClick={handleSubmit}>Tiếp tục</button> {/*SEND DATA*/}
            <button className='cancel-btn' onClick={() => {window.location.href = "/Student/Print/1"}}>Quay lại</button>  
            
        </div>
        <Footer></Footer>
        </div>
        </>
    )

}

export default PrintingPage2
