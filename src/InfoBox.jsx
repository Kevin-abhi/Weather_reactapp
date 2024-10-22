import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import PropTypes from 'prop-types'; // Import PropTypes
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

// export default function InfoBox({ info }) {
//     const INIT_URL =
//     "https://plus.unsplash.com/premium_photo-1675827055668-2dae1b8ac181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

//     return (
//         <div className="InfoBox">
//             {/* <h1>WeatherInfo - {info.weather}</h1> */}
//             <div className='CardContaner'>
//             <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image={INIT_URL}
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {info.city}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"}>
//            <p>Temperature = {info.temp}&deg;C</p>
//            <p>Humidity = {info.humidity}</p>
//            <p>Min Temp = {info.tempMin}&deg;C</p>
//            <p>Max Temp = {info.tempMax}&deg;C</p>
//            <p>
//             The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
//            </p>
//         </Typography>
//       </CardContent>
//     </Card>
//         </div>
//         </div>
//     );
// }
export default function InfoBox({ info }) {
  const HOT_URL = 
    "https://plus.unsplash.com/premium_photo-1675827055668-2dae1b8ac181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL = 
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENPTEQlMjBXRUFUSEVSfGVufDB8fDB8fHww";
    let RAIN_URL =
    "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
  return (
      <div className="InfoBox">
              <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                      sx={{ height: 140 }}
                      image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                      title="Weather Image"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          {info.city} {
                            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
                          }
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary'}} component="span">
                          <p>Temperature: {info.temp}&deg;C</p>
                          <p>Humidity: {info.humidity}%</p>
                          <p>Min Temp: {info.tempMin}&deg;C</p>
                          <p>Max Temp: {info.tempMax}&deg;C</p>
                          <p>
                              The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C.
                          </p>
                      </Typography>
                  </CardContent>
              </Card>
          </div>
  );
}

// Define prop types for the InfoBox component
InfoBox.propTypes = {
  info: PropTypes.shape({
      city: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
      tempMin: PropTypes.number.isRequired,
      tempMax: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      feelsLike: PropTypes.string.isRequired, // Change to string if converting
      weather: PropTypes.string.isRequired,
  }).isRequired,
};
