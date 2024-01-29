"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import designToken from "./darkTheme";

const ThemeRegistry = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={designToken("dark", "ltr")}>
			{/* <ThemeProvider theme={designToken("light", "ltr")}> */}
			{children}
		</ThemeProvider>
	);
};

export default ThemeRegistry;
