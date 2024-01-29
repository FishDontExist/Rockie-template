const designToken = (mode: 'light' | 'dark', direction: 'rtl' | 'ltr') => ({
    mode,
    direction,
    pallete: {
        ...(mode === 'light' ? {
            colors: {
                bg: "white",
                footer_bg: "#F7F7F7",
                bg_secondry: "#F7F7F7",
                red: "#D33535",
                green: "#58BD7D",
                text: {
                    primary: "#23262F",
                    secondary: "#777E90",
                    third: "#23262F",
                },

                button: {
                    bg: "#3772FF",
                    border: "#E6E8EC",
                },

                div_hover: {
                    bg: "transparent",
                    shadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                },
                table_hover: "rgba(55, 114, 255, 1)",


            }
        } : {
            colors: {
                bg: "#141416",
                footer_bg: "#222630",
                bg_secondry: "#18191D",
                red: "#D33535",
                green: "#58BD7D",
                text: {
                    primary: "#FFFFFF",
                    secondary: "#777E90",
                    third: "#B1B5C3",
                },
                button: {
                    bg: "#3772FF",
                    border: "#E6E8EC",
                },

                div_hover: {
                    bg: "#777E90",
                    shadow: "none",
                },
                table_hover: "rgba(55, 114, 255, 1)",


            }
        })
    }
});

export default designToken;