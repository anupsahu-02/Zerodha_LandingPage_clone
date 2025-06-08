import awardImg from '../../assets/images/largestBroker.svg';
import pressLogo from '../../assets/images/pressLogos.png';

function Awards() {
    return (
        <div style={{marginBottom: "100px"}} className="container mt-5">
           <div className="row">
                <div className="col-6">
                    <img src={awardImg} alt="awardImg" />
                </div>
                <div className="col-6 mb-5">
                    <h1 className='pt-4'>Largest stock broker in india</h1>
                    <p className='pb-4 pt-2'>2+ million Zerodha clients contribute to oover 15% of all retail order volumes in india daily by trading and investing in: </p>
                    
                    <div className="row pb-3">
                        <div className="col-6">
                            <ul>
                                <li><p>Futures and Options</p></li> 
                                <li><p>Commodity derivaties</p></li> 
                                <li><p>Currency derivaties</p></li> 
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stocks & IPOs</p></li> 
                                <li><p>Direct mutual funds</p></li> 
                                <li><p>Bonds and etc.</p></li> 
                            </ul>
                        </div>
                    </div>
                    <img src={pressLogo} style={{width: "90%"}}/>
                </div>
           </div>
        </div>
    );
}

export default Awards;