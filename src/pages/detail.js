import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Detail({ searchData }) {
  const { id } = useParams();
  const selectedArticle = searchData.filter((data, i) => i == id)?.[0];
  console.log({ selectedArticle });

  return (
    <div className="newsDetailContainer">
      <div className="btnContainer">
        <Link className="backBtn" to="/">
          Back
        </Link>
      </div>
      <div className="newsContent">
        <div className="imgContainer detailed">
          <img src={selectedArticle.urlToImage} />
        </div>
        <h2>{selectedArticle.title}</h2>
        <p>{selectedArticle.content}</p>
      </div>
    </div>
  );
}
