import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsQuery } from "redux/slice/newsByQuery";

export const useCovidNews = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchNewsQuery("covid"));
    // eslint-disable-next-line
  }, []);

  const newsData = useSelector((state) => state.newsByQuery.entities.covid);

  return { newsData };
};
