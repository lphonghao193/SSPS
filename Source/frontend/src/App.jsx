import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home/home";
import StudentInfo from "./Pages/Student/StudentInfo/Info";
import PaymentHistory from "./Pages/Student/StudentHistory/PaymentHistory";
import PrintHistory from "./Pages/Student/StudentHistory/PrintHistory";
import Login from "./Pages/Login/login";
import PrintingPage1 from "./Pages/Student/StudentPrintDocuments/printing_1";
import PrintingPage2 from "./Pages/Student/StudentPrintDocuments/printing_2";
import PrintingPage3 from "./Pages/Student/StudentPrintDocuments/printing_3";
import PrintingPage4 from "./Pages/Student/StudentPrintDocuments/printing_4";
import PrintingPage5 from "./Pages/Student/StudentPrintDocuments/printing_5";
// import PrintingPage from "./Pages/StudentPrintDocuments/printing";
import BuyPages1 from "./Pages/Student/StudentBuyPages/buypage_1";
import BuyPages2 from "./Pages/Student/StudentBuyPages/buypage_2";
import BuyPages3 from "./Pages/Student/StudentBuyPages/buypage_3";
import Printer from "./Pages/SPSO/Printer/Printer";
import Setting from "./Pages/SPSO/Setting/Setting";
import SPSOInfo from './Pages/SPSO/Info/Info';
import SPSOHistory from './Pages/SPSO/SPSOHistory/spsoHistory';
import SPSOPaymentHistory from './Pages/SPSO/SPSOHistory/spsoPayHistory.jsx';

import Acclist from './Pages/SPSO/Acclist/Acclist.jsx';
import AddAccount from './Pages/SPSO/AddAccount/AddAccount.jsx';
import EditStaff from './Pages/SPSO/editStaff/editStaff.jsx';
import EditStudent from './Pages/SPSO/editStudent/editStudent.jsx';

function App() {
  localStorage.removeItem("isLoggedIn")
  localStorage.setItem("isLoggedIn", false)
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Student/Info" element={<StudentInfo />} />
            <Route path="/SPSO/Info" element={<SPSOInfo />} />
            {/* <Route path="/Student/Print" element={<PrintingPage />} /> */}
            <Route path="/Student/Print/1" element={<PrintingPage1 />} />
            <Route path="/Student/Print/2" element={<PrintingPage2 />} />
            <Route path="/Student/Print/3" element={<PrintingPage3 />} />
            <Route path="/Student/Print/4" element={<PrintingPage4 />} />
            <Route path="/Student/Print/5" element={<PrintingPage5 />} />
            <Route path="/Student/History" element={<PrintHistory />} />
            <Route path="/Student/History/Payment" element={<PaymentHistory />} />
            <Route path="/Student/BuyPages/1" element={<BuyPages1 />} />
            <Route path="/Student/BuyPages/2" element={<BuyPages2 />} />
            <Route path="/Student/BuyPages/3" element={<BuyPages3 />} />
            <Route path="/SPSO/History" element={<SPSOHistory />} />
            <Route path="/SPSO/History/Payment" element={<SPSOPaymentHistory />} />
            <Route path="/SPSO/Printer" element={<Printer />} />
            <Route path="/SPSO/System" element={<Setting />} /> 
            <Route path='/admin/accountList' element={<Acclist/>}/>
            <Route path='/admin/addAccount' element={<AddAccount/>}/>
            <Route path='/admin/editStaff' element={<EditStaff/>}/>
            <Route path='/admin/editStudent' element={<EditStudent/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
