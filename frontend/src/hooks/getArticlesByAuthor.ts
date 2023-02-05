/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";

const getArticlesByAuthor = (authorName: string) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:8000/articles/author/${authorName}`,
    })
      .then((response) => {
        console.log("GET ARTICLES SUCCESS", response);
        setArticles(response.data);
      })
      .catch((error) => {
        console.log("GET ARTICLES ERROR", error.response.data.error);
      });
  }, [authorName]);

  return articles;
};

export default getArticlesByAuthor;