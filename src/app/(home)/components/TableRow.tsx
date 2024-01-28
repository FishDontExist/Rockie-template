import React from "react";
import Image from "next/image";
import { Star } from "../image";
import { TableRowProps } from "../types";
import { Button } from "@mui/material";

function formatToUSD(number: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		// Optional: for large numbers, you might want to show fewer decimal places
		// minimumFractionDigits: 0,
		// maximumFractionDigits: 0,
	}).format(number);
}
export const TableRow = (props: TableRowProps) => {
	const { index, name, buy, sell, percentage, marketCap } = props;
	return (
		<tr>
			<td>
				<Image src={Star} alt="star icon" width={1000} height={1000} />
			</td>
			<td>{index}</td>
			<td>{name}</td>
			<td className="bold">{buy}</td>
			<td className="bold">{sell}</td>
			<td className={percentage < 0 ? "red" : "green"}>
				{percentage < 0 ? "" : "+"}
				{percentage}%
			</td>
			<td className="bold">{formatToUSD(marketCap)}</td>
			<td>
				<Button variant="outlined">trade</Button>
			</td>
		</tr>
	);
};
