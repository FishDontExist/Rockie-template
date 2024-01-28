"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

//Assets
import { StyledNavbar } from "../css";
import Divider from "@mui/material/Divider";
import { Notification, Profile, DarkMode, Logo } from "../image";

//types
import type { ButtonLinkMap } from "../types";
import { Hamburger } from "./Hamburger";

export const Menu = () => {
	const menuItems: ButtonLinkMap = {
		Homepage: "/home",
		"Swap Currency": "/swap",
		"Deposit & Withdraw": "/depo",
		"Trade & Order": "/trade-order",
		"About Us": "/about",
		"Contact us": "/contact",
		FAQ: "/faq",
	};
	const walletOnClick = () => {
		console.log("fake wallet!");
	};

	return (
		<header>
			<StyledNavbar>
				<div className="logo-container">
					<Link href="/" className="logo">
						<Image src={Logo} alt="Logo" width={2000} height={2000} />
					</Link>
				</div>

				<ul>
					{Object.entries(menuItems).map(([text, url]) => (
						<li key={`${text}-${url}`}>
							<Link className="hover-link" key={text} href={url}>
								{text}
							</Link>
						</li>
					))}
				</ul>
				<Hamburger />
				<div className="user-options">
					<Image
						className="user-set icons"
						src={DarkMode}
						alt="dark-mode"
						width={16}
						height={16}
					/>
					<Divider orientation="vertical" variant="middle" flexItem />
					<Image
						className="user-set icons"
						src={Notification}
						alt="bell-icon"
						width={16}
						height={16}
					/>
					<Link href="/wallet" passHref>
						<button className="btn" type="button">
							Wallet
						</button>
					</Link>
					<Image
						className="user-set profile"
						src={Profile}
						alt="profile"
						width={31}
						height={31}
					/>
				</div>
			</StyledNavbar>
		</header>
	);
};

export default Menu;
