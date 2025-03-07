import { useState } from "react";
import "./printing.css";
import Footer from "../../../Components/Footer/footer";
import NavBar from "../../../Components/NavBar/navBar";

function PrintingPage1() {
  const [fileList, setFileList] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to an array
    setFileList(files);
  };

  const handleSubmit = async () => {
    if (fileList.length === 0) {
      setUploadStatus("Hãy chọn ít nhất 1 file để tải lên!!!");
      return;
    }
    let sendFileList = []
    for (let i = 0; i < fileList.length; i++) {
      sendFileList.push(fileList[i].name)
    } 
    console.log(sendFileList)
    window.sessionStorage.setItem("files", JSON.stringify(sendFileList))
    console.log(window.sessionStorage.getItem("files"))
    window.location.href = "/Student/Print/2"
  };

  return (
    <>
      <div className="wrapper">
        <NavBar></NavBar>
        <br />
        <div className="printing-background-container">

          {/* TITLE */}
          <div className="title">
            <strong>
              TẢI LÊN TỆP CẦN IN{" "}
              <i style={{ color: "black" }} className="bi bi-file-earmark-text"></i>
            </strong>
          </div>

          {/* UPLOAD FIELD */}
          <div className="upload-file-field">
            <i
              style={{ color: "black", fontSize: "50px" }}
              className="bi bi-folder-symlink-fill"
            ></i>
            <p>Kéo, thả tệp cần in tại đây</p>
            <p>Hoặc</p>
            <input type="file" onChange={handleFileChange} required/>
            <br />
            <br />
          </div>

          {/* INFO FIELD */}
          <p>Chỉ hỗ trợ file có định dạng: {`pdf, docx`}</p>

          {/* Display the uploaded file names */}
          <div className="uploaded-files">
            <h6>Danh sách tệp đã tải lên:</h6>
            {fileList.length === 0 ? (
              <p>Chưa có tệp nào được tải lên.</p>
            ) : (
              <ul>
                {fileList.map((file, index) => (
                  <li key={index}>File: {file.name}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Display upload status */}
          {uploadStatus && <p className="upload-status" style={{  }}>{uploadStatus}</p>}
          <br /><br />
          <button className="continue-btn" type="button" onClick={handleSubmit}>
            Tiếp tục 
          </button>
          <button className="cancel-btn" type="button" onClick={() => {window.location.href = "/Home"}}>
            Huỷ
          </button>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default PrintingPage1;
