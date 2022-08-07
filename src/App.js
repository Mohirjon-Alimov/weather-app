import {useRef, useState, useEffect} from 'react'
import {Content} from './components/content'
// import { IsError } from './components/isError';

function App() {
  let [data, setData] = useState({})
  let [value, setValue] = useState('tashkent')
  let elInput = useRef();
  useEffect(()=>{
    
    if(value.length){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=e092344549d540c817a03be5e6eb9b43`)
      .then(res => res.json())
      .then((data) => {
        if(data.cod !== '404'){
          setData({data})
        }else {
          console.log(data.cod);
          alert("Try again or enter the correct value");
        }
        })
      .catch((err) => 
        {if(data.cod){
          console.log(err);
          console.log(data.cod);
        }})
      ;
    }else{
      console.log('fetch error');
    }
    

  }, [value, data.cod])

  let catchInputValue = (evt)=>{
    evt.preventDefault();
    
    setValue(elInput.current.value)
  
    elInput.current.value = null;

  };
  
  return (
    
    <div className="d-flex justify-content-center flex-column align-items-center box">
      <div className="w-100">
        <form className=" my-3 d-flex justify-content-evenly" onSubmit={(evt)=> catchInputValue(evt)}>
          <input ref={elInput} type="text" placeholder='Search' className='searchInput' />
          <button className='btn btn-outline-light btn-sm' type="submit">Search</button>
        </form>
      </div>
      <Content data={data.data} />
      
      
      
    </div>
  );
}

export default App;
