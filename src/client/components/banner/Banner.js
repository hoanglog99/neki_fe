/* eslint-disable */
import React from 'react';
import img1 from './banner-img.png';
// import './banner.css'

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';
const Banner = () => {
    return (
		<div class="home">
		

		<div class="home_slider_container">
			<div class="owl-carousel owl-theme home_slider">
				
				<div class="owl-item">
					<div class="home_slider_background" style={{backgroundImage: `url("https://censor.vn/wp-content/uploads/2022/04/nike-dunk-black-white-banner-censorvn-1400x630.webp")`}}></div>
					<div class="home_slider_content">
						<div class="home_slider_content_inner">
							<div class="home_slider_subtitle">Promo Prices</div>
							<div class="home_slider_title">New Collection</div>
						</div>	
					</div>
				</div>

				<div class="owl-item">
										<div class="home_slider_background" style={{backgroundImage: `url("https://censor.vn/wp-content/uploads/2022/04/nike-dunk-black-white-banner-censorvn-1400x630.webp")`}}></div>

					<div class="home_slider_content">
						<div class="home_slider_content_inner">
							<div class="home_slider_subtitle">Promo Prices</div>
							<div class="home_slider_title">New Collection</div>
						</div>	
					</div>
				</div>

				<div class="owl-item">
										<div class="home_slider_background" style={{backgroundImage: `url("https://censor.vn/wp-content/uploads/2022/04/nike-dunk-black-white-banner-censorvn-1400x630.webp")`}}></div>

					<div class="home_slider_content">
						<div class="home_slider_content_inner">
							<div class="home_slider_subtitle">Promo Prices</div>
							<div class="home_slider_title">New Collection</div>
						</div>	
					</div>
				</div>

			</div>
			

			<div class="home_slider_next d-flex flex-column align-items-center justify-content-center"><img src="images/arrow_r.png" alt="" /></div>


			<div class="home_slider_dots_container">
				{/* <div class="container">
					<div class="row">
						<div class="col">
							<div class="home_slider_dots">
								<ul id="home_slider_custom_dots" class="home_slider_custom_dots">
									<li class="home_slider_custom_dot active">01.<div></div></li>
									<li class="home_slider_custom_dot">02.<div></div></li>
									<li class="home_slider_custom_dot">03.<div></div></li>
								</ul>
							</div>
						</div>
					</div>
				</div>		 */}
			</div>
		</div>
	</div>
    );
};

export default Banner;