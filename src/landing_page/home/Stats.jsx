import img from "../../assets/images/ecosystem.png";

function Stats() {
  return (
    <div className="container mb-5" style={{ paddingBottom: "60px" }}>
      <div className="row mt-5">
        <div className="col-6">
          <h2 className="mb-5">Trust with confidence</h2>
          <div>
            <h3 className="fs-5 mb-3">Customer-first always</h3>
            <p className="mb-5">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div>
            <h3 className="fs-5 mb-3">No spam or gimmicks</h3>
            <p className="mb-5">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>
          <div>
            <h3 className="fs-5 mb-3">The Zerodha universe</h3>
            <p className="mb-5">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div>
            <h3 className="fs-5 mb-3">Do better with money</h3>
            <p className="mb-5">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-6 mb-5">
          <img src={img} style={{ width: "100%", height: "100%" }} />
          <div className="text-center">
            <a className="fs-5 mx-5" style={{ textDecoration: "none" }} href="">
              Explore our products{" "}
              <i
                style={{ marginLeft: "8px" }}
                class="fa-solid fa-arrow-right"
              ></i>
            </a>
            <a className="fs-5" style={{ textDecoration: "none" }} href="">
              Try Kite demo{" "}
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

export default Stats;
