import React from 'react';
import {useSearchParams} from 'react-router-dom';

export default function Detail({searchData}) {
  const {id} = useSearchParams();
  const selectedArticle = searchData.filter(data => data.id === id);
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