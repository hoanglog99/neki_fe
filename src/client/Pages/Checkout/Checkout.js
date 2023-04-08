import React from 'react'
import Header from 'src/client/components/Header/Header'
import Footer from 'src/client/components/footer/Footer'

const Checkout = () => {
  return (
    <div>
        <Header />
        <div className="checkout">
		<div className="container">
			<div className="row">

				{/* <!-- Billing Details --> */}
				<div className="col-lg-6">
					<div className="billing">
						<div className="checkout_title">billing details</div>
						<div className="checkout_form_container">
							<form action="#" id="checkout_form">
								<div className="d-flex flex-lg-row flex-column align-items-start justify-content-between">
									<input type="text" className="checkout_input checkout_input_50" placeholder="First Name" required="required"/>
									<input type="text" className="checkout_input checkout_input_50" placeholder="Last Name" required="required"/>
								</div>
								<input type="text" className="checkout_input" placeholder="Company Name"/>
								<input type="text" className="checkout_input" placeholder="E-mail" required="required"/>
								<select name="country" id="country" className="country_select checkout_input">
									<option>Country</option>
									<option>Country</option>
									<option>Country</option>
								</select>
								<input type="text" className="checkout_input" placeholder="Address" required="required"/>
								<input type="text" className="checkout_input" placeholder="Town" required="required"/>
								<div className="d-flex flex-lg-row flex-column align-items-start justify-content-between">
									<input type="text" className="checkout_input checkout_input_50" placeholder="Zipcode" required="required"/>
									<input type="text" className="checkout_input checkout_input_50" placeholder="Phone No" required="required"/>
								</div>
								<textarea name="checkout_comment" id="checkout_comment" className="checkout_comment" placeholder="Leave a comment about your order"></textarea>
								<div className="billing_options">
									<div className="billing_account">
										<input type="checkbox" id="checkbox_account" name="regular_checkbox" className="regular_checkbox checkbox_account"/>
										<label htmlFor="checkbox_account"><img src="images/checked.png" alt=""/></label>
										<span>Create an account</span>
									</div>
									<div className="billing_shipping">
										<input type="checkbox" id="checkbox_shipping" name="regular_checkbox" className="regular_checkbox checkbox_shipping"/>
										<label htmlFor="checkbox_shipping"><img src="images/checked.png" alt=""/></label>
										<span>Ship to a different address</span>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				{/* <!-- Cart Details --> */}
				<div className="col-lg-6">
					<div className="cart_details">
						<div className="checkout_title">cart total</div>
						<div className="cart_total">
							<ul>
								<li className="d-flex flex-row align-items-center justify-content-start">
									<div className="cart_total_title">Product</div>
									<div className="cart_total_price ml-auto">Total</div>
								</li>
								<li className="d-flex flex-row align-items-center justify-content-start">
									<div className="cart_total_title">2 Piece Swimsuit x1</div>
									<div className="cart_total_price ml-auto">$35.00</div>
								</li>
								<li className="d-flex flex-row align-items-center justify-content-start">
									<div className="cart_total_title">Subtotal</div>
									<div className="cart_total_price ml-auto">$35.00</div>
								</li>
								<li className="d-flex flex-row align-items-center justify-content-start">
									<div className="cart_total_title">Shipping</div>
									<div className="cart_total_price ml-auto">$5.00</div>
								</li>
								<li className="d-flex flex-row align-items-start justify-content-start total_row">
									<div className="cart_total_title">Total</div>
									<div className="cart_total_price ml-auto">$40.00</div>
								</li>
							</ul>
						</div>
						<div className="payment_options">
							<div>
								<input type="radio" id="radio_payment_1" name="regular_radio" className="regular_radio" />
								<label htmlFor="radio_payment_1">cash on delivery</label>
							</div>
							<div>
								<input type="radio" id="radio_payment_2" name="regular_radio" className="regular_radio" checked />
								<label htmlFor="radio_payment_2">paypal</label>
								<div className="visa payment_option"><a href="#"><img src="images/visa.jpg" alt=""/></a></div>
								<div className="master payment_option"><a href="#"><img src="images/master.jpg" alt=""/></a></div>
							</div>
							<button className="cart_total_button">place order</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <Footer />
    </div>
  )
}

export default Checkout