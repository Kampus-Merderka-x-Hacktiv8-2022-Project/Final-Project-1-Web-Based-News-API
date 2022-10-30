import React from "react";
import { Container, Grid, Heading } from "@chakra-ui/react";
import Card from "../component/Card";

export default function Indonesia() {
  const [newsData, setNewsData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const newsData = await fetch(
        `https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      ).then((response) => response.json());
      setNewsData(newsData.articles);
    })();
  }, []);

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
        News
      </Heading>
      <Grid mx={40} templateColumns="repeat(3, 1fr)" gap={10}>
        {newsData
          ? newsData.map((item, id) => <Card newsDataItem={item} key={id} />)
          : null}
      </Grid>
    </Container>
  );
}
