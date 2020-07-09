import React, { useEffect, useState} from 'react';
import Header from './Component/Header';
import MainGrid from './Component/MainGrid'
import CountrySelector from './Component/CountrySelector';
import styles from './App.module.css'
import { fatchData } from './Component/CountryApi';
import Cards from './Component/Cards';

function App() {   
  const [countriesData, setCountriesData] = useState({})
   
  const handelCountryChange = async (country) => {
    
    const data = await fatchData(country);    
    setCountriesData({ data: data});
           
    //console.log(data &&  data.confirmed && data.confirmed.value);
    //console.log(countriesData &&  countriesData.confirmed && countriesData.confirmed.value);
    //console.log("1");
    //console.log(tmpCountriesData);
    //console.log("2");
    //console.log(countriesData);    
    
  }
   

  return (
    
    <>
      <Header/>
      <div className={styles.container}>        
        {/* <MainGrid /> */}        
        {countriesData &&  countriesData.confirmed && countriesData.confirmed.value}
        <div>1</div>
        <div>{JSON.stringify(countriesData)}</div>         
        <Cards data={countriesData} />
        <CountrySelector handelCountryChange={handelCountryChange}/>  
      </div>
    </>
    
  );
}

export default App;

