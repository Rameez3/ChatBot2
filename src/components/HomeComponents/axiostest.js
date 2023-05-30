import axios from 'axios';
import React, { useState, useEffect } from 'react';

  
function AxiosTest() {
    
const [userData, setUserData] = useState([]);

useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/data');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    return (
            <div>
              <h1>User Data:</h1>
              <ul>
                {userData.map((user) => (
                  <li key={user._id}>{user.username} {user.password}</li>
                ))}
              </ul>
            </div>
      );
  };

  export default AxiosTest;