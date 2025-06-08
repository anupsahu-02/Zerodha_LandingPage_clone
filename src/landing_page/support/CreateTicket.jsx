import CreateTicketC from './CreateTicketC'

function CreateTicket() {
  return (
    <>
      <h3 style={{marginLeft: "200px"}} className="text-muted fs-4">
        To create a ticket, select a relevant topic
      </h3>
      <div className='container' style={{}}>
        <div className="row">
          <div className="col-4"><CreateTicketC headingIcon={<i class="fa-solid fa-bars"></i>} heading={"Account Opening"} link1={"Resident individual"} link2={"Minor"} link3={"Non Resident Indian (NRI)"} link4={"Company, Partnership, HUF and LLP"} link5={"Glossary"}/></div>
          <div className="col"><CreateTicketC heading={"Your Zerodha Account"} link1={"Your Profile"} link2={"Account modification"} link3={"Client Master Report (CMR) and Depository Participant (DP)"} link4={"Nomination"} link5={"Transfer and conversion of securities"}/></div>
          <div className="col"><CreateTicketC heading={"Kite"} link1={"IPO"} link2={"Trading FAQs"} link3={"Margin Trading Facility (MTF) and Margins"} link4={"Charts and orders"} link5={"Alerts and Nudges"} link6={"General"}/></div>
        </div>
        <div className="row mb-5 pb-5">
          <div className="col-4"><CreateTicketC heading={"Funds"} link1={'Add money'} link2={"Withdraw money"} link3={"Add bank accounts"} link4={'eMandates'}/></div>
          <div className="col"><CreateTicketC heading={" Console"} link1={"Portfolio"} link2={"Corporate actions"} link3={"Funds statement"} link4={"Reports"} link5={"Profile"} link6={"Segments"}/></div>
          <div className="col"><CreateTicketC heading={" Coin"} link1={"Understanding mutual funds and Coin"} link2={"Coin app"} link3={"Coin web"} link4={"Transactions and reports"} link5={"National Pension Scheme (NPS)"}/></div>
        </div>
      </div>
    </>
  );
}

export default CreateTicket;
