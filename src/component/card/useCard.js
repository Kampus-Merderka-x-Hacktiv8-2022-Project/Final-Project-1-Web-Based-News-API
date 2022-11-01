import { useDispatch, useSelector } from "react-redux";
import { addNews, deleteNews } from "redux/slice/savedNews";

export const useCard = (newsDataItem) => {
  const dispatch = useDispatch();

  const savedNews = useSelector((state) => state.savedNews);

  const handleSaveNews = () => {
    dispatch(addNews(newsDataItem));
  };

  const handleDeleteNews = (url) => {
    dispatch(deleteNews(url));
  };

  return {savedNews, handleSaveNews, handleDeleteNews}
};
