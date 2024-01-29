"use client";
import Image from "next/image";
import { useState } from "react";

//components
import Button from "@mui/material/Button"; //MUI 
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { CurrencyCard, HowItWorks, TableRow, WhatIsRockie } from "./components";

//Assets
import {
	StyledCurrencyDiv,
	StyledInfoDiv,
	SytledLiveExchangeRates,
} from "./css";
import { UsFlag, Tether, Ethereum, GlobeImage, BNB } from "./image";



const Page = () => {
	const cardOptions: string[] = ["Fiat", "Coin", "Crypto", "Gold"];
	const tableHead: string[] = [
		"",
		"#",
		"Name",
		"buy",
		"sell",
		"24h%",
		"Market Cap",
		"",
	];
	// const currencyCards: CardProps = {
	// 	imageUrl: BNB,
	// 	name: "Binance",
	// 	fromTo: "BNB/USD",
	// 	price: "966,000",
	// 	addad: 98.01,
	// };
	const [value, setValue] = useState<string>("1");
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	return (
		<>
			<StyledInfoDiv>
				<div className="info-text">
					<h1>Safe buying and selling</h1>
					<p className="fixed-size-text">
						Your gateway to seamless and secure currency exchange in Iran.
						Experience hassle-free transactions and top-notch customer service
					</p>
					<Button
						variant="text"
						onClick={() => {
							console.log("fake button!");
						}}
					>
						Get Started Now
					</Button>
				</div>
				<div className="info-img">
					<Image
						src={GlobeImage}
						alt="globe info"
						width={1000}
						height={1000}
						className="globe-img"
					/>
				</div>
			</StyledInfoDiv>
			<StyledCurrencyDiv>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							{cardOptions.map((value, index) => (
								<Tab
									label={value}
									value={`${index}`}
									key={
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										index
									}
								/>
							))}
						</TabList>
					</Box>
					<TabPanel value="0">
						<div className="card-container">
							<CurrencyCard
								imageUrl={BNB}
								name="Binance"
								fromTo="BNB/USD"
								price="517.489 USD"
								addad={-89.09}
							/>
							<CurrencyCard
								imageUrl={UsFlag}
								name="US Dollar"
								fromTo="USD/IRR"
								price="517.489 Rial"
								addad={-0.97}
							/>
							<CurrencyCard
								imageUrl={Ethereum}
								name="Eth"
								fromTo="ETH/USD"
								price="51,000 USD"
								addad={15.0}
							/>
							<CurrencyCard
								imageUrl={Tether}
								name="Tether"
								fromTo="USDT/USD"
								price="824,000 USD"
								addad={-0.97}
							/>
						</div>
					</TabPanel>
					<TabPanel value="1">
						<div className="card-container">
							<CurrencyCard
								imageUrl={Ethereum}
								name="Eth"
								fromTo="ETH/USD"
								price="51,000 USD"
								addad={15.0}
							/>
							<CurrencyCard
								imageUrl={Ethereum}
								name="Eth"
								fromTo="ETH/USD"
								price="51,000 USD"
								addad={15.0}
							/>
							<CurrencyCard
								imageUrl={Ethereum}
								name="Eth"
								fromTo="ETH/USD"
								price="51,000 USD"
								addad={15.0}
							/>
							<CurrencyCard
								imageUrl={Ethereum}
								name="Eth"
								fromTo="ETH/USD"
								price="51,000 USD"
								addad={15.0}
							/>
						</div>
					</TabPanel>
					<TabPanel value="2">
						<div className="card-container">
							<CurrencyCard
								imageUrl={BNB}
								name="BnCoin"
								fromTo="BNB/USD"
								price="517.489 USD"
								addad={-89.09}
							/>
							<CurrencyCard
								imageUrl={BNB}
								name="BnCoin"
								fromTo="BNB/USD"
								price="517.489 USD"
								addad={-89.09}
							/>
							<CurrencyCard
								imageUrl={BNB}
								name="BnCoin"
								fromTo="BNB/USD"
								price="517.489 USD"
								addad={-89.09}
							/>
							<CurrencyCard
								imageUrl={BNB}
								name="BnCoin"
								fromTo="BNB/USD"
								price="517.489 USD"
								addad={-89.09}
							/>
						</div>
					</TabPanel>
					<TabPanel value="3">
						<div className="card-container">
							<CurrencyCard
								imageUrl={Tether}
								name="Tether"
								fromTo="USDT/USD"
								price="824,000 USD"
								addad={-0.97}
							/>
							<CurrencyCard
								imageUrl={Tether}
								name="Tether"
								fromTo="USDT/USD"
								price="824,000 USD"
								addad={-0.97}
							/>
							<CurrencyCard
								imageUrl={Tether}
								name="Tether"
								fromTo="USDT/USD"
								price="824,000 USD"
								addad={-0.97}
							/>
							<CurrencyCard
								imageUrl={Tether}
								name="Tether"
								fromTo="USDT/USD"
								price="824,000 USD"
								addad={-0.97}
							/>
						</div>
					</TabPanel>
				</TabContext>
			</StyledCurrencyDiv>

			<div className="title">
				<h2>Live Exchange Rates</h2>
				<Button variant="text" onClick={() => console.log("ali")}>
					See all
				</Button>
			</div>
			<SytledLiveExchangeRates>
				<table className="table">
					<thead>
						<tr>
							{tableHead.map((value, index) => {
								return (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<th scope="col" key={index}>
										{value}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{Array.from({ length: 10 }).map((_, index) => (
							<TableRow
								index={index + 1}
								name="US Dollar"
								buy={23000}
								sell={24000}
								percentage={13}
								marketCap={8000000000}
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
							/>
						))}
					</tbody>
				</table>
			</SytledLiveExchangeRates>
			<HowItWorks />
			<WhatIsRockie />
		</>
	);
};

export default Page;
