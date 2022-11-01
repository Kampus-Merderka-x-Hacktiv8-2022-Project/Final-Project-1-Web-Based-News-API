import React from "react";
import { Container, Grid, Heading } from "@chakra-ui/react";
import Card from "component/card/Card";
import { useParams } from "react-router-dom";
import { useSearchNews } from "./useSearchNews";

export default function Search() {
  const { searchKeyWord } = useParams();
  const { newsData } = useSearchNews(searchKeyWord);

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
        {searchKeyWord} News
      </Heading>
      <Grid mx={40} templateColumns="repeat(3, 1fr)" gap={10}>
        {newsData
          ? newsData.map((item, id) => <Card newsDataItem={item} key={id} />)
          : null}
      </Grid>
    </Container>
  );
}
