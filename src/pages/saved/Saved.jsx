import React from "react";
import { Container, Grid, Heading } from "@chakra-ui/react";
import Card from "component/card/Card";
import { useSelector } from "react-redux";

export default function Saved() {
  const savedNews = useSelector((state) => state.savedNews);

  return (
    <Container maxW={'full'}>
      <Heading
        alignContent={'center'}
        alignSelf={'center'}
        alignItems={'center'}
        textAlign={'center'} 
        align={'center'} 
        justify={'center'}
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
        Saved
      </Heading>
      <Grid mx={40} templateColumns="repeat(3, 1fr)" gap={10}>
        {savedNews
          ? savedNews.map((item, id) => <Card newsDataItem={item} key={id} />)
          : null}
      </Grid>
    </Container>
  );
}
