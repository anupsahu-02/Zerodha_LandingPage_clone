function LeftSection({productName, productDescriptions, productURL, productImage}) {
    return ( 
        <div className="container mb-5">
            <div style={{ display:"flex", alignItems: "center"}} className="row">
                <div style={{ paddingRight: "10%"}} className="col-5">
                    <h1 style={{fontSize: "32px"}} className="mb-4">{productName}</h1>
                    <p style={{fontSize: '18px'}} className="">{productDescriptions}</p>
                    <a style={{textDecoration: 'none', fontSize: '17px'}} href="">{productURL} →</a>
                </div>
                <div className="col">
                    <img style={{width: '80%'}} src={productImage} alt="" />
                </div>
            </div>
        </div>
     );
}

export default LeftSection;