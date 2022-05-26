// import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import React from "react";
import { useLocation } from "react-router-dom";
const axios = require('axios').default;

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Calendar() {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  let query = useQuery();
  const code = query.get("code");
  

  useEffect( () => {
    
    async function onboard(){
      const url = 'http://localhost:8000/onboard';
      const result = await axios.post(
        url, { code }
      );
      if(result.data && result.data.status === 'Success'){
        setSuccess(true);
        //window.location.assign('http://localhost:3000/success');
      } else {
        console.log('Error', result.data);
        alert('An error occured!');
      }

    }

    if(code){
       
      setLoading(false);
      onboard();
      
    }
  },[]);

  useEffect( () => {
    if(success){
      window.location.assign('http://localhost:3000/success');
    }
  }, [success]); 

  return (
    <div className="calendar">
      { loading ? ( <div>Loading, Please wait ...</div>) : 
        ( <div> Redirecting ... </div> ) 
      }
    </div>
  );

}

export default Calendar;

