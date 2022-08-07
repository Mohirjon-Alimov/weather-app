import { IsError } from "./isError"
export const Content = ({data})=> {

  return(
    <>
      {(data !== undefined && data?.cod !== '404' ) && 
      <>
        <div className="d-flex align-items-center justify-content-around w-100">
          <div>
            <h3>{data?.name}</h3>
            <p>Temperature: {data?.main.temp}℃</p>
            <p>Wind: {data?.wind.speed} km/h</p>
            <p>Clouds: {data?.clouds.all}</p>
            <p>Line of sight: {data?.visibility} m</p>
            <p>Pressure: {data?.main.pressure} mm</p>
          </div>
          {data?.weather[0].icon !== undefined && 
            <img src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="icon" width='150' height='150' />
          }
          
        </div>
      </>}
      {/* {console.log(data.cod)} */}
      {(data === undefined && data?.cod !== 200) && <IsError />}
    
    </>
    
  )
}