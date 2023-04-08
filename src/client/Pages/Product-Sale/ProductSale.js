import React from 'react'
import './style.css'

const ProductSale = () => {
  return (
    <div className='container1'>
        <div className="">
    <div className="">
        <div className="">
            <div className="">
                <div className="">
                    <div className="text-center text1">only the best</div>
                    <div className="text-center text2">promo prices</div>
                </div>
            </div>
        </div>
        <div className="row promo_container">

        
            <div className="col-lg-4 promo_col ">
                <div className="promo_item">
                    <div className="promo_image">
                        <img src="images/promo_1.jpg" alt="" />
                        <div className="promo_content promo_content_1">
                            <div className="promo_title">-30% off</div>
                            <div className="promo_subtitle">on all bags</div>
                        </div>
                    </div>
                    <div className="promo_link"><a href="#">Shop Now</a></div>
                </div>
            </div>

        
            <div className="col-lg-4 promo_col">
                <div className="promo_item">
                    <div className="promo_image">
                        <img src="images/promo_2.jpg" alt="" />
                        <div className="promo_content promo_content_2">
                            <div className="promo_title">-30% off</div>
                            <div className="promo_subtitle">coats & jackets</div>
                        </div>
                    </div>
                    <div className="promo_link"><a href="#">Shop Now</a></div>
                </div>
            </div>

        
            <div className="col-lg-4 promo_col">
                <div className="promo_item">
                    <div className="promo_image">
                        <img src="images/promo_3.jpg" alt=""/>
                        <div className="promo_content promo_content_3">
                            <div className="promo_title">-25% off</div>
                            <div className="promo_subtitle">on Sandals</div>
                        </div>
                    </div>
                    <div className="promo_link"><a href="#">Shop Now</a></div>
                </div>
            </div>

        </div>
    </div>
</div>
<div className="arrivals">
		<div className="">
			<div className="">
				<div className="">
					<div className="">
						<div className="text1 text-center">only the best</div>
						<div className="text2 text-center">new arrivals</div>
					</div>
				</div>
			</div>
			<div className="row products_container promo_container">

				<div className="col-lg-4 product_col">
					<div className="product">
						<div className="product_image">
							<img src="images/product_1.jpg" alt="" />
						</div>
						{/* <div className="rating rating_4">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div>
						<div className="product_content clearfix">
							<div className="product_info">
								<div className="product_name"><a href="product.html">Womans Long Dress</a></div>
								<div className="product_price">$45.00</div>
							</div>
							<div className="product_options">
								<div className="product_buy product_option"><img src="images/shopping-bag-white.svg" alt="" /></div>
								<div className="product_fav product_option">+</div>
							</div>
						</div> */}
					</div>
				</div>

				<div className="col-lg-4 product_col">
					<div className="product">
						<div className="product_image">
							<img src="images/product_2.jpg" alt="" />
						</div>
						{/* <div className="rating rating_4">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div>
						<div className="product_content clearfix">
							<div className="product_info">
								<div className="product_name"><a href="product.html">2 Piece Swimsuit</a></div>
								<div className="product_price">$35.00</div>
							</div>
							<div className="product_options">
								<div className="product_buy product_option"><img src="images/shopping-bag-white.svg" alt="" /></div>
								<div className="product_fav product_option">+</div>
							</div>
						</div> */}
					</div>
				</div>

				<div className="col-lg-4 product_col">
					<div className="product">
						<div className="product_image">
							<img src="images/product_3.jpg" alt="" />
						</div>
						{/* <div className="rating rating_4">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div>
						<div className="product_content clearfix">
							<div className="product_info">
								<div className="product_name"><a href="product.html">Man Blue Jacket</a></div>
								<div className="product_price">$145.00</div>
							</div>
							<div className="product_options">
								<div className="product_buy product_option"><img src="images/shopping-bag-white.svg" alt="" /></div>
								<div className="product_fav product_option">+</div>
							</div>
						</div> */}
					</div>
				</div>

			</div>
		</div>
	</div>
</div>
  )
}

export default ProductSale