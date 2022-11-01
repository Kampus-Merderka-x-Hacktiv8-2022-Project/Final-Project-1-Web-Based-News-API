import React from "react";
import { Container, Grid, Heading } from "@chakra-ui/react";
import Card from "component/card/Card";
import { useCovidNews } from "./useCovidNews";

export default function Covid19() {
  const { newsData } = useCovidNews();

  return (
    <Container maxW={"full"}>
      <Heading
        alignContent={"center"}
        alignSelf={"center"}
        alignItems={"center"}
        textAlign={"center"}
        align={"center"}
        justify={"center"}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
      >
        Covid-19
      </Heading>
      <Grid mx={40} templateColumns="repeat(3, 1fr)" gap={10}>
        {newsData
          ? newsData.map((item, id) => <Card newsDataItem={item} key={id} />)
          : null}
      </Grid>
    </Container>
  );
}
