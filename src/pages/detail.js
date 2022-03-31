import React from 'react';
import {useParams} from 'react-router-dom';

export default function Detail({searchData}) {
  const {id} = useParams();
  const selectedArticle = searchData.filter(data => data.id == id)?.[0];
  console.log(selectedArticle)
  return (
    <div>
      <h2>
        {selectedArticle.heading}
      </h2>
      <p>
        {selectedArticle.newsData}
      </p>
    </div>
  )
}