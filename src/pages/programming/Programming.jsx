import React from "react";
import { Container, Grid, Heading } from "@chakra-ui/react";
import Card from "component/card/Card";
import { useProgramingNews } from "./useProgramingNews";

export default function Programming() {
  const { newsData } = useProgramingNews();

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
        Programming
      </Heading>
      <Grid mx={40} templateColumns="repeat(3, 1fr)" gap={10}>
        {newsData
          ? newsData.map((item, id) => <Card newsDataItem={item} key={id} />)
          : null}
      </Grid>
    </Container>
  );
}
