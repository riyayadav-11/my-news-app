import React from 'react';
import {Link} from "react-router-dom"

export default function Home({searchData, searchString, setSearchString}) {
  return (
    <div>
      <div className='search-input'>
        <input placeholder="Search a headline" value={searchString} onChange={e => setSearchString(e.target.value)} />
        <button>SEARCH</button>
      </div>
      {searchData?.map((data, i) => (
        <div key={i}>
          <Link to={`/${i}`}>
            <div className='news-link'>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}