import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
// export default function SearchBox({ updateInfo }) {
//     const [city, setCity] = useState("");
//     const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//     const API_KEY = "529bb9c493b52ec273688e916dd61e34";

//     const getWeatherInfo = async () => {
//         try {
//             const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             const jsonResponse = await response.json();
//             // console.log(jsonResponse);

//             const result = {
//                 city: city,
//                 temp: jsonResponse.main.temp,
//                 tempMin: jsonResponse.main.temp_min,
//                 tempMax: jsonResponse.main.temp_max,
//                 humidity: jsonResponse.main.humidity,
//                 feelsLike: jsonResponse.weather[0].description,
//             };

//             console.log(result);
//             return result;
//         } catch (error) {
//             console.error("Error fetching weather data:", error);
//         }
//     };

//     const handleChange = (evt) => {
//         setCity(evt.target.value);
//     };

//     let handleSubmit = async (evt) => {
//         evt.preventDefault();
//         getWeatherInfo(); 
//         setCity("");  
//         let newInfo = await getWeatherInfo();
//         updateInfo(newInfo);
//     };

//     return (
//         <div className='SearchBox'>
//             {/* <h3>Search for the Weather</h3> */}
//             <form onSubmit={handleSubmit}>
//                 <TextField 
//                     id="City" 
//                     label="City name" 
//                     variant="outlined" 
//                     required 
//                     value={city} 
//                     onChange={handleChange} 
//                 />
//                 <br /><br />
//                 <Button variant="contained" type='submit'>Search</Button>
//             </form>
//         </div>
//     );
// }
import PropTypes from 'prop-types';
export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // State for error message
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "529bb9c493b52ec273688e916dd61e34"; 

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const jsonResponse = await response.json();

            setErrorMessage("");

            return {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setErrorMessage(error.message); // Set error message
            return null;
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
        }
        setCity("");
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="City" 
                    label="City name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange} 
                />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
        </div>
    );
}

// PropTypes validation
SearchBox.propTypes = {
    updateInfo: PropTypes.func.isRequired,
};