import React from "react";
import Image from "next/image";
import { CardProps } from "../types";

export const CurrencyCard: React.FC<CardProps> = ({
	imageUrl,
	name,
	fromTo,
	price,
	addad,
}) => {
	return (
		<div className="card">
			<div className="title">
				<Image src={imageUrl} height={2000} width={2000} alt="flag" />
				<p>{name}</p>
				<p>{fromTo}</p>
			</div>
			<div className="card-other-info">
				<p>{price}</p>
				<div className={addad > 0 ? "green" : "red"}>
					{addad > 0 ? `+${addad}` : addad}%
				</div>
			</div>
		</div>
	);
};

export default CurrencyCard;
