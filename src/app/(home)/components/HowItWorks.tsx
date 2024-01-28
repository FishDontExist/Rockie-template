import React from "react";
import Image from "next/image";
//Assets
import { StyledHowItWorks } from "../css";
import { MoneyBag, Monitor, Wallet, Chart, line } from "../image";

function breakingLine() {
	return (
		<Image
			src={line}
			className="line"
			alt="breaking line"
			width={500}
			height={500}
		/>
	);
}
export const HowItWorks = () => {
	return (
		<StyledHowItWorks>
			<section className="work">
				<div className="work-text-title">
					<h3>How It Works</h3>
					<p>
						Discover the simple steps to a smooth currency exchange journey with
						us.
					</p>
				</div>
				<div className="work-main">
					<div className="work-block">
						<Image src={Monitor} alt="monitor" width={500} height={500} />
						<p>Step 1</p>
						<span>
							Sign up and submit your documents for swift verification to start
							your exchange journey
						</span>
					</div>
					{breakingLine()}
					<div className="work-block">
						<Image src={Wallet} alt="wallet" width={500} height={500} />
						<p>Step 2</p>
						<span>
							Once verified, easily deposit funds to your wallet to prepare for
							your trading activities
						</span>
					</div>
					{breakingLine()}
					<div className="work-block">
						<Image src={Chart} alt="chart" width={500} height={500} />
						<p>Step 3</p>
						<span>
							Trade, exchange currencies, and manage your portfolio with
							flexibility and control
						</span>
					</div>
					{breakingLine()}
					<div className="work-block">
						<Image src={MoneyBag} alt="money bag" width={500} height={500} />
						<p>Step 4</p>
						<span>
							Seamlessly withdraw your earnings or reinvest to continue growing
							your assets
						</span>
					</div>
				</div>
			</section>
		</StyledHowItWorks>
	);
};
