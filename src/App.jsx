import React,{useState} from 'react';
import './App.css';

function App() {
  const[value, setValue] = useState("")
  const [results, setResults] = useState([])
// G8FAa7wNnLIAX9nHufC7sef2iqyE5tU91ADnye6tw6Q
  const fetchPics = () =>{
    fetch(`https://api.unsplash.com/search/photos?client_id=G8FAa7wNnLIAX9nHufC7sef2iqyE5tU91ADnye6tw6Q&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      // 
      setResults(data.results)
    })
  }
  return (
    <main>
      <div>
        <div>
        
          <input type="text" name="search" className="round" value ={value} onChange = {(e) =>setValue (e.target.value)} />
          <button onClick = {()=>fetchPics()}>search</button>
        </div>
        <div className = "gallery">
          {
            results.map((item)=>{
              return <img className ="pics" key = {item.id} src = {item.urls.regular}/>
            })
          }
          
        </div>
      </div>
    </main>
  );
}

export default App;