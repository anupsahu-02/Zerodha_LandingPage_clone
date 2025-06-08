import imgVarsity from "../../assets/images/varsity.png";

function Education() {
  return (
    <div style={{ marginTop: "170px" }} className="container">
      <div className="row">
        <div className="col-6">
          <img src={imgVarsity} alt="" />
        </div>
        <div className="col-6">
          <h1 className="mt-5 fs-2">Free and open market education</h1>
          <div className="mt-5">
            <p style={{ fontSize: "17px" }} className="mt-1">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              className=""
              style={{ textDecoration: "none", fontSize: "17px" }}
              href=""
            >
              Varsity{" "}
              <i
                style={{ marginLeft: "8px" }}
                class="fa-solid fa-arrow-right"
              ></i>
            </a>
          </div>
          <div>
            <p className="mt-4" style={{ fontSize: "17px" }}>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries..
            </p>
            <a
              className=""
              style={{ textDecoration: "none", fontSize: "17px" }}
              href=""
            >
              TradingQ&A{" "}
              <i
                style={{ marginLeft: "8px" }}
                class="fa-solid fa-arrow-right"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
