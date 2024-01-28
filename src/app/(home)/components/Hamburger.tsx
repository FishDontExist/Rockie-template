import React, { useState, useRef } from "react";
import Link from "next/link";
import { HamburgerNav } from "../css";
import useOutsideClick from "./outsideClickHook";


import { ButtonLinkMap } from "../types";
import { Button, Divider } from "@mui/material";

export const Hamburger = () => {

	const [open, setOpen] = useState<boolean>(false);
    const dropDownRef = useRef(null);
    useOutsideClick(dropDownRef, open, () => setOpen(false));

	const menuItems: ButtonLinkMap = {
		Homepage: "/home",
		"Swap Currency": "/swap",
		"Deposit & Withdraw": "/depo",
		"Trade & Order": "/trade-order",
		"About Us": "/about",
		"Contact us": "/contact",
		FAQ: "/faq",
	};
	
	return (
		<>
			<Button
				className="ham"
				variant="text"
				onClick={() => {setOpen(!open)}}
			>
				Menu
			</Button>
			<div className="hamburger-menu" ref={dropDownRef}>
			{open && (
				
					<HamburgerNav>
						<ul>
							{Object.entries(menuItems).map(([text, url]) => (
								<>
									<li key={`${text}--${url}`}>
										<Link
											className="hover-link-hamburger"
											key={text}
											href={url}
										>
											{text}
										</Link>
										
									</li>
									<Divider component="li" />
								</>
							))}
						</ul>
					</HamburgerNav>
				
				)}
			</div>
		</>
	);
};
