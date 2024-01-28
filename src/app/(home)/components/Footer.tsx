import React from "react";
import Image from "next/image";
import { StyledFooter } from "../css";
import { Logo } from "../image";

export const Footer = () => {
	return (
		<StyledFooter>
			<div className="container">
				<div className="text-n-logo">
					<Image src={Logo} alt="logo" width={1000} height={1000} />
					<h3>Lets talk! &apos</h3>
					<span>+12 345 678 9101</span>
					<span>Info.Avitex@gmail.com</span>
					<span>
						Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
					</span>
				</div>
				<div className="options">
					<div className="widget-link">
						<h5>PRODUCTS</h5>
						<p>Spot</p>
						<p>Inverse Perpetual</p>
						<p>USDT Perpetual</p>
						<p>Exchange</p>
						<p>Launchpad</p>
						<p>Binance Pay</p>
					</div>
					<div className="widget-link n2">
						<h5>SERVICES</h5>
						<p>Buy Crypto</p>
						<p>Markets</p>
						<p>Tranding Fee</p>
						<p>Affiliate Program</p>
						<p>Referral Program</p>
						<p>API</p>
					</div>
					<div className="widget-link n3">
						<h5>SUPPORT</h5>
						<p>Bybit Learn</p>
						<p>Help Center</p>
						<p>User Feedback</p>
						<p>Submit a request</p>
						<p>API Documentation</p>
						<p>Trading Rules</p>
					</div>
					<div className="widget-link n4">
						<h5>ABOUT US</h5>
						<p>About Bybit</p>
						<p>Authenticity Check</p>
						<p>Careers</p>
						<p>Business Contacts</p>
						<p>Blog</p>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<p>Copyright © 2022 Avitex</p>
			</div>
		</StyledFooter>
	);
};
