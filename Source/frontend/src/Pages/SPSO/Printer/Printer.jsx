import React, { useEffect, useState } from "react";
import './Printer.css';
import NavBar from "../../../Components/NavBar/navBar";
import Footer from "../../../Components/Footer/footer";

function Printer() {
  // Dữ liệu các máy in mẫu
  const [printers, setPrinters] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const [filterType,setfilterType] = useState('all');

  const fetchPrinter = async()=>{
        try{
            const response = await fetch(`http://localhost:8080/ssps/spso/printerList`,{
                method: 'GET'
            });
            const data = await response.json();
            setPrinters(data); 
            return data;
        }
        catch (err){
            console.log(err);
        }
  }

  useEffect(()=>{
    fetchPrinter();
  },[]);


  // Dữ liệu cho form thêm máy in
  const [showAddPrinterForm, setShowAddPrinterForm] = useState(false);
  const [newPrinter, setNewPrinter] = useState({
    brand: '',
    location: '',
    status: 'active',  // Mặc định là 'active'
  });

  // Hàm để dừng máy in
  const stopPrinter = async(printerID) => {
    try { 
        const response = await fetch(`http://localhost:8080/ssps/spso/stopPrinter/${printerID}`,{
                method: 'PUT'
            })
            if (!response.ok) {
                throw new Error('Network response was not ok'); 
            }
        }
        catch (error) { 
            console.log(error.message); 
        }
    
    await filterPrinters(filterType);
  };

  // Hàm để khôi phục máy in trở lại trạng thái 'active'
  const activatePrinter = async(printerID) => {
    try { 
        const response = await fetch(`http://localhost:8080/ssps/spso/startPrinter/${printerID}`,{
                method: 'PUT'
            })
            if (!response.ok) {
                throw new Error('Network response was not ok'); 
            }
        }
        catch (error) { 
            console.log(error.message); 
        }
    await filterPrinters(filterType);
  };

  // Hàm để thêm máy in mới
  const addPrinter = async() => {
    const data = await fetchPrinter();
    const newPrinterData = { ...newPrinter, printerID: `P00${data.length + 1}` };
    try { 
        const response = await fetch(`http://localhost:8080/ssps/spso/addPrinter`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPrinterData),
            });
            if (!response.ok) {
                console.log(response);
            }
        }
        catch (error) { 
            console.log(error.message); 
        }
    setShowAddPrinterForm(false);  // Đóng form sau khi thêm máy in
    await filterPrinters('all');
    setNewPrinter({ brand: '', location: '', status: 'active' });  // Reset form
  };

  // Hàm để lọc máy in theo trạng thái
  const filterPrinters = async(status) => {
    const data = await fetchPrinter();
    setfilterType(status);
    if (status === 'all') {
        return ;
    }
    const filteredData = data.filter((printer) => printer.status === status);
    setPrinters(filteredData);
  };

  return (
    <div>
    <NavBar/>
    <div className="printer-container">
      <div className="printer-sidebar">
        <div className="filter-option">
          <button onClick={() => filterPrinters('all')}>Tất cả máy in</button>
        </div>
        <div className="filter-option">
          <button onClick={() => filterPrinters('active')}>Đang hoạt động</button>
        </div>
        <div className="filter-option">
          <button onClick={() => filterPrinters('inactive')}>Không hoạt động</button>
        </div>
        <div className="filter-option">
          <button onClick={() => setShowAddPrinterForm(true)}>Thêm máy in</button>
        </div>
      </div>

      <div className="printer-list">
        <h2>Danh sách máy in</h2>
        <table>
          <thead>
            <tr>
              <th>Mã số</th>
              <th>Hiệu</th>
              <th>Địa điểm</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {printers.map(printer => (
              <tr key={printer.printerID}>
                <td>{printer.printerID}</td>
                <td>{printer.brand}</td>
                <td>{printer.location}</td>
                <td>{printer.status === 'active' ? 'Đang hoạt động' : 'Không hoạt động'}</td>
                <td>
                  {printer.status === 'active' ? (
                    <button onClick={() => stopPrinter(printer.printerID)}>Dừng</button>
                  ) : (
                    <button onClick={() => activatePrinter(printer.printerID)}>Hoạt động</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form thêm máy in */}
      {showAddPrinterForm && (
        <div className="add-printer-form">
          <h2>Thêm máy in mới</h2>
          <label>
            Tên máy in:
            <input 
            required
              type="text" 
              value={newPrinter.brand} 
              onChange={(e) => setNewPrinter({ ...newPrinter, brand: e.target.value })} 
            />
          </label>
          <label>
            Vị trí:
            <input 
            required
              type="text" 
              value={newPrinter.location} 
              onChange={(e) => setNewPrinter({ ...newPrinter, location: e.target.value })} 
            />
          </label>
          <label>
            Trạng thái:
            <select 
              value={newPrinter.status} 
              onChange={(e) => setNewPrinter({ ...newPrinter, status: e.target.value })}
            >
              <option value="active">Hoạt động</option>
              <option value="inactive">Tạm dừng</option>
            </select>
          </label>
          <button onClick={addPrinter}>Thêm máy in</button>
          <button onClick={() => setShowAddPrinterForm(false)}>Hủy</button>
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
}

export default Printer;