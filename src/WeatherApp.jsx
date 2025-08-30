import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

// export default function WeatherApp() {
//     const [WeatherInfo, setWeatherInfo] = useState({
//         city: "Delhi",
//         feelslike: 24.84,
//         temp: 25.05,
//         tempMin: 25.05,
//         tempMax: 25.05,
//         humidity: 47,
//         weather: "haze",
//     });

//     // let updateInfo = (newInfo) => {
//     //     setWeatherInfo(newInfo);
//     // };
//     let updateInfo = (newInfo) => {
//         // Convert feelsLike to a string
//         const updatedInfo = {
//             ...newInfo,
//             feelsLike: String(newInfo.feelsLike), // Convert to string
//         };
//         setWeatherInfo(updatedInfo);
//     };
    

//     return ( 
//         <div style={{textAlign: "center" }}>
//             <h2>Weather App by Abhi</h2>
//             <SearchBox updateInfo={updateInfo}/>
//             <InfoBox info={WeatherInfo} />
//         </div>
//     );
// }
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84, // Ensure this matches the prop name used in InfoBox
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    const updateInfo = (newInfo) => {
        // Update state with the new information
        setWeatherInfo(newInfo);
    };

    return ( 
        <div style={{ textAlign: "center" }}>
            <h2>Weather App React</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}