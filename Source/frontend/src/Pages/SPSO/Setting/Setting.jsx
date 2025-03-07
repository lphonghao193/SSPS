import React, { useEffect, useState } from "react";
import './Setting.css';
import NavBar from "../../../Components/NavBar/navBar";
import Footer from "../../../Components/Footer/footer";

function Setting() {
  const [pageNumber, setPageNumber] = useState('');
  const [dateAdded, setDateAdded] = useState('');
  const [fileFormats, setFileFormats] = useState({
    pdf: false,
    docx: false,
    doc: false,
    png: false,
    iepg: false,
    jpg: false,
    txt: false,
  });

  const fetchData = async()=>{
    try{
        const response = await fetch(`http://localhost:8080/ssps/spso/getSetting`, {method:'GET'});
        if (!response.ok) {
            console.log(response);
            return;
        }
        const data = await response.json();
        console.log(data);
        const pageNum = Number(data.pageNumber);
        setPageNumber(pageNum);
        setDateAdded(new Date(data.dateAdded).toISOString().split("T")[0]);
        setFileFormats({pdf: data.pdf,
                        docx: data.docx,
                        doc: data.doc,
                        png: data.png,
                        iepg: data.iepg,
                        jpg: data.jpg,
                        txt: data.text,});
    }catch (err){
        console.log(err);
    }
  }

    useEffect(() => { 
        fetchData(); 
    }, []); 

  // Hàm xử lý lưu cài đặt
  const handleSaveSettings = async() => {
    try{
        const payLoad = {id:"1", pageNumber:pageNumber,dateAdded:new Date(dateAdded),
            pdf:fileFormats.pdf, docx:fileFormats.docx, doc:fileFormats.doc,
            png:fileFormats.png, iepg:fileFormats.iepg, jpg:fileFormats.jpg,
            text:fileFormats.txt};
        const response = await fetch(`http://localhost:8080/ssps/spso/changeSystem`,{
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payLoad)
        });
        if (!response.ok) {
            console.log(response);
            return;
        }
    }catch(err){
        console.log(err);
    }
    alert('Cài đặt đã được lưu');
  };

  // Hàm cập nhật trạng thái các định dạng tệp
  const handleFormatChange = (event) => {
    const { name, checked } = event.target;
    setFileFormats((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div>
        <NavBar/>
        
    <div className="settings-container">
      <div className="settings-form">
        <h2>Thiết lập hệ thống</h2>
        
        {/* Số trang mặc định */}
        <div className="form-group">
          <label>Số trang mặc định:</label>
          <input
            type="number"
            value={pageNumber}
            onChange={(e) => setPageNumber(e.target.value)}
            placeholder="Nhập số trang"
          />
        </div>

        {/* Ngày thêm trang mặc định */}
        <div className="form-group">
          <label>Ngày thêm trang mặc định:</label>
          <input
            type='date'
            value={dateAdded}
            onChange={(e) => setDateAdded(e.target.value)}
            placeholder="DD/MM/YYYY"
          />
        </div>

        {/* Định dạng tệp in */}
        <div className="form-group">
          <label>Định dạng tệp in được chấp nhận:</label>
          <div className="file-formats">
            <label>
              <input
                type="checkbox"
                name="pdf"
                checked={fileFormats.pdf}
                onChange={handleFormatChange}
              /> PDF
            </label>
            <label>
              <input
                type="checkbox"
                name="docx"
                checked={fileFormats.docx}
                onChange={handleFormatChange}
              /> DOCX
            </label>
            <label>
              <input
                type="checkbox"
                name="doc"
                checked={fileFormats.doc}
                onChange={handleFormatChange}
              /> DOC
            </label>
            <label>
              <input
                type="checkbox"
                name="png"
                checked={fileFormats.png}
                onChange={handleFormatChange}
              /> PNG
            </label>
            <label>
              <input
                type="checkbox"
                name="iepg"
                checked={fileFormats.iepg}
                onChange={handleFormatChange}
              /> IEPG
            </label>
            <label>
              <input
                type="checkbox"
                name="jpg"
                checked={fileFormats.jpg}
                onChange={handleFormatChange}
              /> JPG
            </label>
            <label>
              <input
                type="checkbox"
                name="txt"
                checked={fileFormats.txt}
                onChange={handleFormatChange}
              /> TXT
            </label>
          </div>
        </div>

        {/* Nút Lưu */}
        <button className="save-button" onClick={handleSaveSettings}>
          Lưu
        </button>
      </div>
    </div>
    <footer/>
    </div>
  );
}

export default Setting;
