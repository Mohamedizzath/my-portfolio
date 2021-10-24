import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { BsLightning } from 'react-icons/bs'
import React from "react";

const Navbar = () => {
    return (
        <Box as="nav" bg="themeBlue.900" py={1} opacity={0.9} shadow="2xl" color="whiteAlpha.800">
            <Flex w="75%" mx="auto" py={2.5} justifyContent="center">
                <Box>
                    <Heading as="h3" fontSize="3xl" letterSpacing={1.1}>
                        <Flex alignContent="center">
                            <Box>
                                <BsLightning/>
                            </Box>
                            &nbsp;<Link to="/">Mohamed Izzath</Link>
                        </Flex>
                    </Heading>
                </Box>
                <Spacer/>
                <Flex alignItems="center">
                    <Text fontSize="lg" mx={2} letterSpacing={1.2} px={2}
                        border="1px" borderRadius="md"
                        _hover={{ backgroundColor:"whiteAlpha.800", color:"themeBlue.700", fontWeight:"bold"}}>
                        <Link to="/blog">Blog</Link>
                    </Text>
                    <Text fontSize="lg" mx={2} letterSpacing={1.2} px={2}
                        border="1px" borderRadius="md"
                        _hover={{ backgroundColor:"whiteAlpha.800", color:"themeBlue.700", fontWeight:"bold"}}>
                        <Link to="/projects">Projects</Link>
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;
