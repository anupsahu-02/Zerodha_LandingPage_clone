import img from '../../assets/images/nithinKamath.jpg'

function Team() {
  return (
    <div className="container">
      <div className="row text-center pb-5 pt-5 mt-5">
        <h1 className="fs-2">People</h1>
      </div>
      <div
        style={{
          padding: "0 100px 0 100px",
          fontSize: "18px",
        }}
        className="row mb-5"
      >
        <div className="col text-center">
            <img style={{borderRadius: "100%", width: '55%'}} src={img} alt="" />
            <h5 style={{opacity : '0.9'}} className='mt-4 mb-3'>Nithin Kamath</h5>
            <p>Founder, CEO</p>
        </div>
        <div className="col">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>{" "}
          <p>
            {" "}
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>{" "}
          <p>Playing basketball is his zen.</p>{" "}
          <p>
            Connect on{" "}
            <a style={{ textDecoration: "none" }} href="">
              Homepage
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="">
              TradingQnA
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
