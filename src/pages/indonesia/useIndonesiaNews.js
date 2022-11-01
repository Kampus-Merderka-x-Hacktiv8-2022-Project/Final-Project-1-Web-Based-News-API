import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsByCountry } from "redux/slice/newsByCountry";

export const useIndonesiaNews = () => {
  const newsData = useSelector((state) => state.newsByCountry.entities);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchNewsByCountry("id"));
    // eslint-disable-next-line
  }, []);

  return { newsData };
};
