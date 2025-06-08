import playStoreIMG from '../../assets/images/googlePlayBadge.svg'
import appStoreIMG from '../../assets/images/appstoreBadge.svg'


function RightSection({img, productName, productDescription, URL1, URL2, URL_name1, URL_name2}) {
    return ( 
        <div className="container p-5 mb-5">
            <div  style={{ display:"flex", alignItems: "center"}} className="row">
                <div className="col-7 mx-5">
                    <img src={img} alt="" />
                </div>
                <div className="col">
                    <h1 className='mb-4' style={{fontSize: "35px"}}>{productName}</h1>
                    <p style={{fontSize: '17px'}}>{productDescription}</p>
                    <div className='mb-4 mt-2' >
                        <a style={{textDecoration: 'none', fontSize: '17px', marginTop: "20px"}} href="">{URL_name1}</a>
                        <a  style={{textDecoration: 'none', fontSize: '17px', marginLeft: "50px", paddingBottom: "20px"}} href="">{URL_name2}</a>
                    </div>

                    <div className=''>
                        <a href=""><img style={{marginRight: "20px"}} className='' src={playStoreIMG} alt="" /></a>
                        <a href=""><img src={appStoreIMG} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default RightSection;