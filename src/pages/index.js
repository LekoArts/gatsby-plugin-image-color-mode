import * as React from "react"
import { Container, Heading, Box, Text, Button, useColorMode } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container as="main" py={12}>
      <title>Home Page</title>
      <Heading as="h1">Title of my page</Heading>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Text mt="6" fontSize="21px">Edit me 123</Text>
      <Text mt="6" fontSize="21px">Edit me 123 123</Text>
      <Box height="12" />
      <StaticImage src="../images/362.jpg" alt="Instagram Photo" height={500} width={500} />
    </Container>
  )
}

export default IndexPage
