import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsQuery } from "redux/slice/newsByQuery";

export const useProgramingNews = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchNewsQuery("programming"));
    // eslint-disable-next-line
  }, []);

  const newsData = useSelector(
    (state) => state.newsByQuery.entities.programming
  );

  return { newsData };
};
