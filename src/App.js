
import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from "./Components/Header";
import ListImage from "./Components/ListImage";

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/addCat');
      console.log(response.data[0]);
      setData(response.data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const deleteCatList = async (id) => {
    try {
      await axios.post('http://localhost:5000/deleteCat', {
        data_image: id
      });
      fetchData(); // Refresh the list after adding a new cat
    } catch (error) {
      console.error('Error adding cat:', error);
    }

  }
  const handleAddCatList = async () => {
    try {
      const response_image = await axios.get('https://api.thecatapi.com/v1/images/search');
      const name_cat = await axios.get('https://randomuser.me/api/');

      await axios.post('http://localhost:5000/addCat', {
        data_image: response_image.data[0].url,
        name : name_cat.data.results[0].name.first

      });
      fetchData(); // Refresh the list after adding a new cat
    } catch (error) {
      console.error('Error adding cat:', error);
    }
  };

  

  return (
    <div>
      <Header handleAddCatList={handleAddCatList} />
      <ListImage deleteCatList={deleteCatList} data={data} />
    </div>
  );
}

export default App;
