import React from 'react';
import './App.css';

const  api = {
  key:"f6d707e38f68c8cacca408fee97863d0",
  base: "https://api.openweathermap.org/data/2.5/"
}
 
function App() {

  const  dateBuilder = (d) => {
    let  months =
    ["January", "February", "March", "April", "May", "July", "August", "September", "October", "November", "December"];
    let  days =[
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
    ];

    let  day = days[d.getDay()];
    let  date = d.getDate();
    let  month = months[d.getMonth()];
    let  year  = d.getFullYear();
    
    return `${day}  ${date}  ${month}  ${year}`
  }


  return (
    <div className="app warm">
      <main>
        <div className='search-box'>
          <input
           type='text'
           className='search-bar'
           placeholder='Search...'
           />

        </div>

        <div className='location-box'>
          <div className='location'> New York City, US</div>
          <div className="date"> {dateBuilder(new Date())}</div>

        </div>

        <div className="weather-box">
          <div className="temp">
            15c
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
