import logo from "../assets/images/logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer ">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2">
          <img className="mb-4" style={{ height: "20px", width: "129px" }} src={logo} alt="" />
          <p style={{ fontSize: "12px" }}>
            © 2010 - 2025, Zerodha Broking Ltd. <br /> All rights
            reserved.
          </p>
          <p>icons</p> <hr /> <p>icons</p>
        </div>
        <div className="col-2">
          <h1 className="fs-5">Company</h1>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Referral programme</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Zerodha.tech</a>
          </li>
          <li>
            <a href="">Open source</a>
          </li>
          <li>
            <a href="">Press & media</a>
          </li>
          <li>
            <a href="">Zerodha Cares (CSR)</a>
          </li>
        </div>
        <div className="col-2">
          <h1 className="fs-5">Support</h1>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <a href="">Support portal</a>
          </li>
          <li>
            <a href="">Z-Connect blog</a>
          </li>
          <li>
            <a href="">List of charges</a>
          </li>
          <li>
            <a href="">Downloads & resources</a>
          </li>
          <li>
            <a href="">Videos</a>
          </li>
          <li>
            <a href="">Market overview</a>
          </li>
          <li>
            <a href="">How to file a complaint?</a>
          </li>
          <li>
            <a href="">Status of your complaints</a>
          </li>
        </div>
        <div className="col-2">
          <h1 className="fs-5">Account</h1>
          <li>
            <a href="">Status of your complaints</a>
          </li>
          <li>
            <a href="">Fund transfer</a>
          </li>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Footer;
