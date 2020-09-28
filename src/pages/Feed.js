import React from "react";
import { useQuery } from "react-query";
import { fetchTopHeadlines } from "../api/news";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import ArticleCard from "../components/ArticleCard";

const Feed = () => {
  const { isLoading, data, error } = useQuery("feed", fetchTopHeadlines);
  if (isLoading) {
    return <Loading title="Loading feed..." />;
  }

  if (error) {
    return <ErrorMessage title="Error while getting feed. Try again." />;
  }

  return (
    <div>
      {data.articles.map(article => (
        <ArticleCard key={article.name} article={article} />
      ))}
    </div>
  );
};

export default Feed;
