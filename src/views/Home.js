// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
const axios = require('axios').default;

function Home() {
  
  return (
    <div className="landing">
      <h1>Welcome </h1>
      <button onClick={authFlow}>Onboard</button>
    </div>
  );

  async function authFlow(){
    const url = 'http://localhost:8000/auth_url';
    try {
      const response = await axios.get(url);
      const authUrl = response.data.authUrl;
      console.log('Auth URL', authUrl);
      window.location.assign(authUrl);
    } catch (error) {
      console.log(error);
      alert('An error occured!')
    }
  }

}

export default Home;

