import homeHeroImg from '../../assets/images/homeHero.png';

function Hero() {
    return ( 
        <div style={{marginTop: '100px'}} className='container mb-5'>
           <div className='row text-center'>
                <img style={{width: '70%', marginLeft: '15%'}} src={homeHeroImg} alt="Homehero" className='mb-5'/>
                <h1 className='mt-4'>Invest in everything</h1>
                <p className='fs-5 mt-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='mt-4 mb-5 btn btn-primary' style={{width:"15%", height:"45px", fontSize:"20px", borderRadius:"5px", margin:"0 auto"}}>Sign up for free</button>
           </div>
        </div>
     );
}

export default Hero;