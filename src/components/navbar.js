import { Box, Heading } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import React from "react";

const Navbar = () => {
    return (
        <Box>
            <Heading>Nav Bar</Heading>
            <Link to="/home">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/projects">Projects</Link>
        </Box>
    );
}

export default Navbar;
