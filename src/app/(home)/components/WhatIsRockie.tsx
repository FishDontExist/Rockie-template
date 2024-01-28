import React from "react";
import Image from "next/image";
import { StyledWhatIsRockie } from "../css";
import { Laptop, MostatilBozorg } from "../image";
import { Button } from "@mui/material";

export const WhatIsRockie = () => {
	return (
		<StyledWhatIsRockie>
			<div className="image-container">
				
				<Image
					className="forground-image"
					src={Laptop}
					alt="big laptop"
					width={2000}
					height={2000}
				/>
			</div>

			<div className="text-block">
				<h2>What Is Rockie</h2>
				<p>
					Experience a variety of trading on Bitcost. You can use various types
					of coin transactions such as Spot Trade, Futures Trade, P2P, Staking,
					Mining, and margin.
				</p>
				<h3>View real-time cryptocurrency prices</h3>
				<p>
					Experience a variety of trading on Bitcost. You can use various types
					of coin transactions such as Spot Trade, Futures Trade, P2P, Staking,
					Mining, and margin.
				</p>
				<h3>Buy and sell BTC, ETH, XRP, OKB, Etc...</h3>
				<p>
					Experience a variety of trading on Bitcost. You can use various types
					of coin transactions such as Spot Trade, Futures Trade, P2P, Staking,
					Mining, and margin.
				</p>
				<Button
					variant="text"
					onClick={() => {
						console.log("it's fake bozo!");
					}}
				>
					Explore More
				</Button>
			</div>
		</StyledWhatIsRockie>
	);
};
