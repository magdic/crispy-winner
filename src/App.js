import React from 'react';
import axios from 'axios';
import './App.css';

const { useState, useEffect } = React;

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get('https://61435a41c5b553001717cf2f.mockapi.io/api/challenge/jobs')
      .then(function(response) {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => console.log(error));
    
  }, []);
  
  const listItems = data.map((item, ix) =>
    <div className='card' key={ix}>
      <p className='card__location'>{ item.location }</p>
      <p className='card__job'>{ item.job }</p>  
      <hr className='limiter'/>
      <span className='card__button' onClick={()=> alert(item.job)}>Apply</span>
    </div>
  );
                             
  return (
    <div>
      <div>
        <h1>Conexio Jobs</h1>  
      </div>
      { isLoading ?  <div id="loading"></div> : '' } 
      <section className='card-container'>
          {listItems}
      </section>
    </div>
  );
}

export default App;
