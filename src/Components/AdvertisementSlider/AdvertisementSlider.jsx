

const AdvertisementSlider = () => {

    return (
        <div className="mt-5">
            
        <div className="carousel w-full h-[90vh] ">
            <div id="slide1" className="carousel-item relative w-full h-[90vh]">

                <div>
                <img src="https://www.insight.com/content/dam/insight-web/en_US/store/apple/apple-full-product-suite-sept-2023.png" className="w-full h-[90vh] bg-gray-400" />

                </div>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[90vh]">
                <img src="https://soyacincau.com/wp-content/uploads/2021/01/210110-samsung-1.jpg" className="w-full h-[90vh]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[90vh]">
                <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1660031678706/1716ebb9326af06095417cf7ad6b76eb.jpg" className="w-full h-[90vh]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[90vh]">
                <img src="https://www.pcworld.com/wp-content/uploads/2023/10/Intel-Core-logo-expand-2.png?w=1024" className="w-full h-[90vh]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        </div>
    );
}


export default AdvertisementSlider;