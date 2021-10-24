import { extendTheme } from "@chakra-ui/react";

const custheme = extendTheme({
    fonts:{
        body: 'Roboto Condensed',
        heading: 'Roboto Condensed',
    },
    colors: {
        themeBlue: {
            100: "#04ADBF",
            300: "#037380",
            500: "#026873",
            700: "#025159",
            900: "#012E33",
        },
        themeYellow: {
            100: "#CCAE89",
            300: "#BFA380",
            500: "#A68D6F",
            700: "#8C775E",
            900: "#40362B",
        },
        themeBrown: {
            100: "#CC6104",
            300: "#BF5B04",
            500: "#A64F03",
            700: "#592B02",
            900: "#401E01",
        },
    },
});

export default custheme;