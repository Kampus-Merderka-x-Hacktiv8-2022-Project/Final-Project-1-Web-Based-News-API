import React from "react";
import { Container, Grid, Heading } from "@chakra-ui/react";
import Card from "../component/Card";
import { useParams } from "react-router-dom";

const date = new Date();
const monthAgo = new Date(
  date.setMonth(date.getMonth() - 1)
).toLocaleDateString("en-CA");

export default function Search() {
  const [newsData, setNewsData] = React.useState([]);

  const { searchKeyWord } = useParams();

  React.useEffect(() => {
    (async () => {
      const newsData = await fetch(
        `https://newsapi.org/v2/everything?q=${searchKeyWord}&pageSize=24&from=${monthAgo}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      ).then((response) => response.json());
      setNewsData(newsData.articles);
    })();
  }, [searchKeyWord]);

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
