import zerothaFund from "../../assets/images/zerodhaFundhouse.png";
import streakLogo from "../../assets/images/streakLogo.png";
import smallcaseLogo from "../../assets/images/smallcaseLogo.png";
import sensibullLogo from "../../assets/images/sensibullLogo.svg";
import goldenpiLogo from "../../assets/images/goldenpiLogo.png";
import dittoLogo from "../../assets/images/dittoLogo.png";

function Universe() {
  return (
    <div className="container mt-5">
      <p className="text-center mb-5 fs-5">
        Want to know more about our technology stack? Check out the{" "}
        <a style={{ textDecoration: "none" }} href="">
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <div className="row text-center pt-5 mb-5">
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div
        style={{ justifyContent: "center", width: "79%", margin: "auto auto" }}
        className="row"
      >
        <div className="col text-center mb-5">
          <a
            style={{ textDecoration: "none", color: "black", fontSize: "15px" }}
            href=""
          >
            <img className="mb-3" width={"60%"} src={zerothaFund} alt="" />
            <p
              style={{ fontSize: "13px", fontWeight: "500", opacity: 0.8 }}
              className="text-muted"
            >
              Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.
            </p>
          </a>
        </div>
        <div className="col text-center">
          <a
            style={{ textDecoration: "none", color: "black", fontSize: "15px" }}
            href=""
          >
            <img className="mb-3" width={"50%"} src={streakLogo} alt="" />
            <p
              className="text-muted"
              style={{ fontSize: "13px", fontWeight: "500", opacity: 0.8 }}
            >
              Options trading platform that lets you <br />
              create strategies, analyze positions, and examine <br />
              data points like open interest, FII/DII, and more.
            </p>
          </a>
        </div>
        <div className="col text-center">
          <a
            style={{ textDecoration: "none", color: "black", fontSize: "15px" }}
            href=""
          >
            <img className="mb-3" width={"60%"} src={smallcaseLogo} alt="" />
            <p
              className="text-muted"
              style={{ fontSize: "13px", fontWeight: "500", opacity: 0.8 }}
            >
              Investment research platform <br />
              that offers detailed insights on stocks, <br />
              sectors, supply chains, and more.
            </p>
          </a>
        </div>
      </div>
      <div
        style={{ justifyContent: "center", width: "79%", margin: "auto auto" }}
        className="row"
      >
        <div className="col text-center">
          <a
            style={{ textDecoration: "none", color: "black", fontSize: "15px" }}
            href=""
          >
            <img className="mb-3" width={"60%"} src={sensibullLogo} alt="" />
            <p
              className="text-muted"
              style={{ fontSize: "13px", fontWeight: "500", opacity: 0.8 }}
            >
              Systematic trading platform <br />
              that allows you to create and backtest <br />
              strategies without coding.
            </p>
          </a>
        </div>
        <div className="col text-center">
          <a
            style={{ textDecoration: "none", color: "black", fontSize: "15px" }}
            href=""
          >
            <img className="mb-3" width={"60%"} src={goldenpiLogo} alt="" />
            <p
              className="text-muted"
              style={{ fontSize: "13px", fontWeight: "500", opacity: 0.8 }}
            >
              Thematic investing platform <br />
              that helps you invest in diversified <br />
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="col text-center mb-5">
          <a
            style={{ textDecoration: "none", color: "black", fontSize: "15px" }}
            href=""
          >
            <img className="mb-3" width={"40%"} src={dittoLogo} alt="" />
            <p
              className="text-muted"
              style={{ fontSize: "13px", fontWeight: "500", opacity: 0.8 }}
            >
              Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling.
            </p>
          </a>
        </div>
      </div>
      <div className="text-center mb-5"><button className='mt-4 mb-5 btn btn-primary' style={{width:"15%", height:"45px", fontSize:"20px", borderRadius:"5px", margin:"0 auto"}}>Sign up for free</button></div>
    </div>
  );
}

export default Universe;
