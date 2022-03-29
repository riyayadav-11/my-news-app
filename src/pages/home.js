import React from 'react';
import {Link} from "react-router-dom"

export default function Home({searchData, searchString, setSearchString}) {
  return (
    <div>
      <h1>NEWS APP</h1>
      <div>
        <input placeholder="Search a headline" value={searchString} onChange={setSearchString} />
      </div>
      {searchData?.map(data => (
        <div key={data.id}>
          <Link to={`/${data.id}`}>
            <h2>{data.heading}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}