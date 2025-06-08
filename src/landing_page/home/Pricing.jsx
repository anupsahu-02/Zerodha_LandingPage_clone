import priceImg from '../../assets/images/pricing0.svg';
import priceImg2 from '../../assets/images/intradayTrades.svg';

function Pricing() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a className='' style={{textDecoration: 'none', fontSize: '17px'}} href="">See pricing <i style={{marginLeft : "8px"}} class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div style={{display : "flex"}} className="col-6">
                    <div style={{display : "flex"}} className="col-4 pt-5">
                        <img style={{height: '80px'}} src={priceImg} alt="" />
                        <p className='' style={{fontSize: '12px', position: 'absolute', marginLeft: '85px', marginTop: '40px'}}>Free acount <br /> opening</p>
                    </div>
                    <div style={{display : "flex"}} className="col-4  pt-5">
                        <img style={{height: '80px'}} src={priceImg} alt="" />
                        <p className='' style={{fontSize: '12px', position: 'absolute', marginLeft: '85px', marginTop: '40px'}}>Free equity delivery <br />and direct mutual funds</p>
                    </div>
                    <div style={{display : "flex"}} className="col-4  pt-5">
                        <img style={{height: '80px'}} src={priceImg2} alt="" />
                        <p className='' style={{fontSize: '12px', position: 'absolute', marginLeft: '100px', marginTop: '40px'}}>Intraday and <br />F&O</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;