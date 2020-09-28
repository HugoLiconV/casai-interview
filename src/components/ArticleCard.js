import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const ArticleCard = ({ article }) => {
  return (
    <div className="card">
      <h3 style={{ margin: 0 }}>{article.title}</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span className="tag">{article.source.name}</span>
        <span>{dayjs(article.publishedAt).fromNow()}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
