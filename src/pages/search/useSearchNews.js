import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsQuery } from "redux/slice/newsByQuery";

export const useSearchNews = (queryNews) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchNewsQuery(queryNews));
  }, [dispatch, queryNews]);

  const newsData = useSelector((state) => state.newsByQuery.entities.search);

  return { newsData };
};
