
import React, { useEffect, useState } from 'react';

export const XCountries = ({image, name}) => {
  return(
    <>
    <div style={{
      // margin: "5px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      height: "200px",
      width: '200px',
      border: "1px solid black",
      borderRadius: "10px",
      boxShadow: "2px 2px 4px rgba(0,0,0,0.5)"
      // padding: "8px",
    }}>
      <img style={{
        height : "100px",
        width : "100px"

      }} src ={image} alt={name}/>
      <p>{name}</p>
    </div>
      
    </>
  )
};



function App() {
  
  const [data, setData] = useState([]);
  
  const fetchData = async() =>{
    try {
      const response = await fetch(`https://xcountries-backend.azurewebsites.net/all`);
      const result = await response.json();
      setData(result);
      console.log("Data Fetched successfully");

    }catch (error) {
    console.error('Error Fetching Data: ', error);
  }
  };
  useEffect(()=>{
    fetchData();
  },[]);
  
  return (
    <div style={{
      display: "flex",
      justifyContent:"center",
      flexWrap: "wrap",
      gap: "10px"
    }}>
      {data.map((ele,idx) =>(<XCountries key ={idx} image ={ele.flag} name = {ele.name}/>))}
      
    </div>
  );
}

export default App;
