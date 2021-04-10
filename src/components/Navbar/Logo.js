import React from "react"
import { Box, Text } from "@chakra-ui/react"

const Logo = (props) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">🏀 Basketball Player Search</Text>
      <Text fontSize="sm" fontStyle="italic">by Razeen Ahmad</Text>
    </Box>
  )
};

export default Logo;
