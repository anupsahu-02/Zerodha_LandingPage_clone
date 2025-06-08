import Hero from "./Hero";
import Universe from "./Universe";
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import leftImg from '../../assets/images/console.png'
import leftImg2 from '../../assets/images/kiteconnect.png'
import rightImgKite from '../../assets/images/kite.png'
import rightImgCoin from '../../assets/images/coin.png'
import rightImgVarsity from '../../assets/images/varsity.png'

function ProductPage() {
    return ( 
        <>
        <Hero/>
        <RightSection productName={"Kite"} productDescription={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} img={rightImgKite} URL_name1={"Try demo  →"} URL_name2={"Learn More  →"} />
        <LeftSection productName={"Console"} productDescriptions={"The central dashboard for your Zerodha account.  Gain insights into your trades and investments with in-depth reports and visualisations."} productURL={"Learn More"} productImage={leftImg}/>
        <RightSection productName={"Coin"} productDescription={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} URL_name1={"Coin →"} img={rightImgCoin}/>
        <LeftSection productName={"Kite Connect API"} productDescriptions={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} productURL={"Kite Connect"} productImage={leftImg2}/>
        <RightSection productName={"Varsity mobile"} productDescription={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."} img={rightImgVarsity} />
        <Universe/></>
     );
}

export default ProductPage;