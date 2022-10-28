import React from "react";
import { Grid } from "@chakra-ui/react";
import Card from "../component/Card";
import { useSelector } from "react-redux";

export default function Saved() {
  const savedNews = useSelector((state) => state.savedNews);

  return (
    <Grid mx={40} templateColumns="repeat(3, 1fr)" gap={10}>
      {savedNews
        ? savedNews.map((item, id) => <Card newsDataItem={item} key={id} />)
        : null}
    </Grid>
  );
}
