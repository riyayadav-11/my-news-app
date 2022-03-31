import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/home"
import Detail from './pages/detail';

function createObject(id, heading, newsData){
  return {
    id,
    heading,
    newsData
  }
}

const dummyData = [
  createObject(0, "Three 'rats' looting Pakistan for last 30 yrs: Imran Khan", "Harnaaz Kaur Sandhu sets the ramp on fire during FDCI x Lakme Fashion Week"),
  createObject(1, "IPL 2022: Punjab Kings stun RCB by five wickets", "Harnaaz Kaur Sandhu sets the ramp on fire during FDCI x Lakme Fashion Week"),
  createObject(2, "Bahrain seals Indian restaurant for denying entry to veiled woman", "Harnaaz Kaur Sandhu sets the ramp on fire during FDCI x Lakme Fashion Week"),
  createObject(3, "Women's World Cup: How infighting plagued India's campaign", "Harnaaz Kaur Sandhu sets the ramp on fire during FDCI x Lakme Fashion Week"),
  createObject(4, "How to reduce data usage during WhatsApp calls", "Harnaaz Kaur Sandhu sets the ramp on fire during FDCI x Lakme Fashion Week"),
  createObject(5, "5 days left to link PAN with Aadhaar: How to do it", "Harnaaz Kaur Sandhu sets the ramp on fire during FDCI x Lakme Fashion Week"),
  createObject(6, "India to soon build nuclear power plants in 'fleet mode'", "Harnaaz Kaur Sandhu sets the ramp on fire during FDCI x Lakme Fashion Week"),
  createObject(7, "Harnaaz Kaur Sandhu sets the ramp on fire during FDCI x Lakme Fashion Week", "Harnaaz Kaur Sandhu sets the ramp on fire during FDCI x Lakme Fashion Week"),
]

const App = function() {
  const [searchData, setSearchData] = useState(null);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    //fetch data from api
    //set into searchData
    setSearchData(dummyData);
  }, [])

  useEffect(() => {
    setSearchData(dummyData.filter(data => data.heading.toLowerCase().includes(searchString.toLowerCase()) || data.newsData.toLowerCase().includes(searchString.toLowerCase())))
  }, [searchString])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home searchData={searchData} searchString={searchString} setSearchString={setSearchString} />
        </Route>
        <Route path="/:id">
          <Detail searchData={searchData} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  