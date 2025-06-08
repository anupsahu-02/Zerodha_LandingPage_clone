import pricingMF from '../../assets/images/pricingMF.svg'

function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center mt-5 mb-5 pb-5 pt-5">
                <h1 style={{fontSize: '44px'}} className="">Charges</h1>
                <p className="fs-4 text-muted">List of all charges and taxes</p>
            </div>
            <div style={{margin: "150px 0"}} className="row text-center">
                <div className="col text-center">
                    <img style={{width: "65%"}} src={pricingMF} />
                    <h2 className='text-muted fs-3'>Free equity delivery</h2>
                    <p style={{fontSize: '17px'}} className='text-muted'>All equity delivery investments (NSE, BSE), <br /> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col text-center">
                    <img style={{width: "65%"}} src={pricingMF} />
                    <h2 className='text-muted fs-3'>Intraday and F&O trades</h2>
                    <p style={{fontSize: '17px'}} className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per<br /> executed order on intraday trades across <br />equity, currency, and commodity trades. Flat <br />₹20 on all option trades.</p>
                </div>
                <div className="col text-center">
                    <img style={{width: "65%"}} src={pricingMF} />
                    <h2 className='text-muted fs-3'>Free direct MF</h2>
                    <p style={{fontSize: '17px'}} className='text-muted'>All direct mutual fund investments are <br /> absolutely free — ₹ 0 commissions & DP <br />charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;