function CreateTicketC({heading, headingIcon, link1, link2, link3, link4, link5, link6}) {
  return (
      <div className="mt-5">
        <div className="">
          <a
            className="fs-5"
            style={{ textDecoration: "none", color: "black" }}
            href=""
          >
            {" "}
            <span  className="">{headingIcon}</span> {heading}
          </a>
          <ul className="mt-4">
            <li style={{ listStyle: "none", marginBottom: "10px"}}>
              <a style={{ textDecoration: "none"}} href="">
                {link1}
              </a>
            </li>
            <li style={{ listStyle: "none", marginBottom: "10px"}}>
              <a style={{ textDecoration: "none" }} href="">
                {link2}
              </a>
            </li>
            <li style={{ listStyle: "none", marginBottom: "10px" }}>
              <a style={{ textDecoration: "none",}} href="">
                {link3}
              </a>
            </li>
            <li style={{ listStyle: "none", marginBottom: "10px"}}>
              <a style={{ textDecoration: "none" }} href="">
                {link4}
              </a>
            </li>
            <li style={{ listStyle: "none", marginBottom: "10px"}}>
              <a style={{ textDecoration: "none" }} href="">
                {link5}
              </a>
            </li>
            <li style={{ listStyle: "none" ,marginBottom: "10px"}}>
              <a style={{ textDecoration: "none" }} href="">
                {link6}
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default CreateTicketC;