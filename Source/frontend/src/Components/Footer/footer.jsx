import React from "react";
import "./footer.css";
// import { Link } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css'

const Footer = ({ imgSrc = '/logobk.png'}) => {
    return (
        <footer>
            <div className="footer-info" style={{ "padding": "0 0 0 1cm" }}>
                <div style={{ margin: 0, padding: 0, fontSize: "13px" }}>
                    <img className="footer-uniLogo" src= {imgSrc} alt="Logo"></img>
                    <p className="footer-uniName">
                        ĐẠI HỌC QUỐC GIA THÀNH HỐ HỒ CHÍ MINH <br />
                    <strong>TRƯỜNG ĐẠI HỌC BÁCH KHOA</strong>
                    </p>
                    <p className="footer-uniAddress">268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh</p>
                </div>
            </div>
            <div className="footer-contact">
                <div className="footer-link-container">
                    <a className="footer-link" href="//www.facebook.com/truongdhbachkhoa" target="_blank"><i className="bi bi-facebook h3"></i></a>
                    <a className="footer-link" href="//www.linkedin.com/school/hcmut-bachkhoa/" target="_blank"><i className="bi bi-linkedin h3"></i></a>
                    <a className="footer-link" href="//www.youtube.com/@truongdhbachkhoa" target="_blank"><i className="bi bi-youtube h3"></i></a>
                    <a className="footer-link" href="//www.instagram.com/truongdaihocbachkhoa.1957/" target="_blank"><i className="bi bi-instagram h3"></i></a>
                </div>
                <p style={{ textAlign: "right", padding: "5px 00", margin: "0", fontSize: "13px"}}>Bản quyền &copy; 2024</p>
            </div>
        </footer>
    );
};

export default Footer;