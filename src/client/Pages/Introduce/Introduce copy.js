import React from 'react'
import img1 from '../public/images/extra_1.jpg'
import img2 from '../public/images/extra_2.jpg'
import img3 from '../public/images/gallery.jpg'
import img4 from '../public/images/newsletter.jpg'
const Introduce = () => {
  return (
      <div>
          <div className="extra clearfix">
              <div className="extra_promo extra_promo_1">
                  <div className="extra_promo_image" style={{ backgroundImage: `url(${img1})` }}></div>
                  <div className="extra_1_content d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="extra_1_price">30%<span>off</span></div>
                      <div className="extra_1_title">On all shoes</div>
                      <div className="extra_1_text">*Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra.</div>
                      <div className="button extra_1_button"><a href="checkout.html">check out</a></div>
                  </div>
              </div>
              <div className="extra_promo extra_promo_2">
                  <div className="extra_promo_image" style={{ backgroundImage: `url(${img2})` }}></div>
                  <div className="extra_2_content d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="extra_2_title">
                          <div className="extra_2_center">&</div>
                          <div className="extra_2_top">Mix</div>
                          <div className="extra_2_bottom">Match</div>
                      </div>
                      <div className="extra_2_text">*Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra.</div>
                      <div className="button extra_2_button"><a href="checkout.html">check out</a></div>
                  </div>
              </div>
          </div>


          <div className="gallery">
              <div className="gallery_image" style={{ backgroundImage: `url(${img3})` }}></div>
              <div className="container">
                  <div className="row">
                      <div className="col">
                          <div className="gallery_title text-center">
                              <ul>
                                  <li><a href="#">#wish</a></li>
                                  <li><a href="#">#wishinstagram</a></li>
                                  <li><a href="#">#wishgirl</a></li>
                              </ul>
                          </div>
                          <div className="gallery_text text-center">*Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra.</div>
                          <div className="button gallery_button"><a href="#">submit</a></div>
                      </div>
                  </div>
              </div>
              <div className="gallery_slider_container">

                  <div className="owl-carousel owl-theme gallery_slider">


                      <div className="owl-item gallery_item">
                          <a className="colorbox" href="images/gallery_1.jpg">
                              <img src="images/gallery_1.jpg" alt="" />
                          </a>
                      </div>


                      <div className="owl-item gallery_item">
                          <a className="colorbox" href="images/gallery_2.jpg">
                              <img src="images/gallery_2.jpg" alt="" />
                          </a>
                      </div>


                      <div className="owl-item gallery_item">
                          <a className="colorbox" href="images/gallery_3.jpg">
                              <img src="images/gallery_3.jpg" alt="" />
                          </a>
                      </div>


                      <div className="owl-item gallery_item">
                          <a className="colorbox" href="images/gallery_4.jpg">
                              <img src="images/gallery_4.jpg" alt="" />
                          </a>
                      </div>


                      <div className="owl-item gallery_item">
                          <a className="colorbox" href="images/gallery_5.jpg">
                              <img src="images/gallery_5.jpg" alt="" />
                          </a>
                      </div>

                      <div className="owl-item gallery_item">
                          <a className="colorbox" href="images/gallery_6.jpg">
                              <img src="images/gallery_6.jpg" alt="" />
                          </a>
                      </div>

                  </div>
              </div>
          </div>


          <div className="testimonials">
              <div className="container">
                  <div className="row">
                      <div className="col">
                          <div className="section_title_container text-center">
                              <div className="section_subtitle">only the best</div>
                              <div className="section_title">testimonials</div>
                          </div>
                      </div>
                  </div>
                  <div className="row test_slider_container">
                      <div className="col">

                          <div className="owl-carousel owl-theme test_slider text-center">

                              <div className="owl-item">
                                  <div className="test_text">“Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra nec. Fusce vel lorem libero. Integer ex mi, facilisis sed nisi ut, vestibulum ultrices nulla. Aliquam egestas tempor leo.”</div>
                                  <div className="test_content">
                                      <div className="test_image"><img src="images/testimonials.jpg" alt="" /></div>
                                      <div className="test_name">Christinne Smith</div>
                                      <div className="test_title">client</div>
                                  </div>
                              </div>

                              <div className="owl-item">
                                  <div className="test_text">“Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra nec. Fusce vel lorem libero. Integer ex mi, facilisis sed nisi ut, vestibulum ultrices nulla. Aliquam egestas tempor leo.”</div>
                                  <div className="test_content">
                                      <div className="test_image"><img src="images/testimonials.jpg" alt="" /></div>
                                      <div className="test_name">Christinne Smith</div>
                                      <div className="test_title">client</div>
                                  </div>
                              </div>

                              <div className="owl-item">
                                  <div className="test_text">“Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra nec. Fusce vel lorem libero. Integer ex mi, facilisis sed nisi ut, vestibulum ultrices nulla. Aliquam egestas tempor leo.”</div>
                                  <div className="test_content">
                                      <div className="test_image"><img src="images/testimonials.jpg" alt="" /></div>
                                      <div className="test_name">Christinne Smith</div>
                                      <div className="test_title">client</div>
                                  </div>
                              </div>

                          </div>

                      </div>
                  </div>
              </div>
          </div>



          <div className="newsletter">
              <div className="newsletter_content">
                  <div className="newsletter_image" style={{ backgroundImage: `url(${img4})` }}></div>
                  <div className="container">
                      <div className="row">
                          <div className="col">
                              <div className="section_title_container text-center">
                                  <div className="section_subtitle">only the best</div>
                                  <div className="section_title">subscribe for a 20% discount</div>
                              </div>
                          </div>
                      </div>
                      <div className="row newsletter_container">
                          <div className="col-lg-10 offset-lg-1">
                              <div className="newsletter_form_container">
                                  <form action="#">
                                      <input type="email" className="newsletter_input" required="required" placeholder="E-mail here" />
                                      <button type="submit" className="newsletter_button">subscribe</button>
                                  </form>
                              </div>
                              <div className="newsletter_text">Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra nec. Fusce vel lorem libero. Integer ex mi, facilisis sed nisi ut, vestib ulum ultrices nulla. Aliquam egestas tempor leo.</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Introduce