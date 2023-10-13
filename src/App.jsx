
import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
   


      const [city,setCity] = useState();
      const [weather,setWeather] = useState(null);
         

        const fetchdata = async()=>{
            
              const response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9bd77cee2ecf4ce6c0d3fcc7b0221930`)
          
            setWeather(response.data);
            console.log(response.data);
         
      }

      useEffect(()=>{
        fetchdata();
      },[])

     

      const handleInputchange = (e)=>{
          setCity(e.target.value)
      }
  
    
    const handleSubmit =(e)=>{
       e.preventDefault();
       fetchdata();
    }


  
 

  return (

    
     <div className = "main-div">
         
          <div className="span">Weather Forecast</div>
          <div className="weather-icon">
                <img src="./assets/we.png" alt="n" height="100px" width="100px"/>
              </div>
            <div className="searchbar">
              <form onSubmit={handleSubmit}>
              <input type = "text"  placeholder="type Your search.." className="search" onChange={handleInputchange}></input>
               <button type='submit' className="button">Get Weather</button>
              </form>
            </div>

            <div className="Weatherbox">
                  {
                    weather ? (
                          <>  
                             
                             <h2>{weather.name} <img src="./assets/we.png" alt="n" height="30px" width="30px" /></h2>
                             <p>Temprature</p>
                             <p className="temp">{weather.main.temp} °C <img src="./assets/temp.png" alt="n" height="20px" width="20px" /> </p> 
                             <p>Description</p>
                             <p>{weather.weather[0].description} <img src="./assets/haze.png" alt="n" height="25px" width="25px" /></p>
                             <p>Feels Like</p>
                             <p>{weather.main.feels_like} °C <img src="./assets/temp.png" alt="n" height="20px" width="20px" /> </p>
                             <p>Humidity</p>
                             <p>{weather.main.humidity} % <img src="./assets/humidity.png" alt="n" height="20px" width="20px" /></p>
                             <p>Wind Speed</p>
                             <p>{weather.wind.speed} m/s <img src="./assets/wind.png" alt="n" height="20px" width="20px" /> </p>
                          
                          </>
                         
                    ):(
                      <p className='errorclass'>
                         <p1>Search Weather Here! </p1>
                      </p>
                    )

                    
                  }
            </div>
            
            
     </div>

   
  )
}

export default App
