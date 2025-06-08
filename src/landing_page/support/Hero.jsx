function Hero() {
  return (
    <div
      style={{ color: "white" }}
      className="container-fluid support-wrapper"
    >
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "50px 0",
        }}
      >
        <a
          className="fs-4"
          style={{
            fontWeight: "500",
            color: "white",
            textDecoration: "none",
            marginLeft: "100px",
          }}
          href=""
        >
          Support Portal
        </a>
        <a
          className="fs-5"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "120px",
          }}
          tickets
          href=""
        >
          <p
            style={{ display: "inline-block", borderBottom: "1px solid white" }}
          >
            Track tickets
          </p>
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="mb-4">
              Search for an answer or browse help topics to create a <br /> ticket
            </h4>
            <input
              type="text"
              style={{
                width: "100%",
                height: "60px",
                fontSize: "large",
                paddingLeft: "20px",
                borderRadius: "5px",
                border: "none",
              }}
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            />
            <div
              className="support-a mt-3"
            >
              <a href="">
                <p className="border-bottom" style={{}}>
                Track account opening
                </p>
              </a>
              <a href="">
                <p>Track segment activation</p>
              </a>
              <a href="">
                <p>Intraday margins</p>
              </a>
              <a href="">
                <p>Kite user manual</p>
              </a>
            </div>
          </div>
          <div className="col-5" style={{ marginLeft: "30px" }}>
            <h4 className="mb-3">Featured</h4>
            <ol style={{ fontSize: "larger" }} className="supportLinks">
              <li className="mb-4">
                <a href="">
                  Change in expiry day of NSE derivative contracts from April
                  04, 2025 [Withheld]
                </a>
              </li>
              <li>
                <a href="">
                  Change in mutual fund settlement cycle due to settlement
                  holiday on account of Annual Bank closing (April 01, 2025)
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
