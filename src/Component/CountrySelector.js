import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from "./CountryApi";
import styles from './CountrySelector.module.css';

const CountrySelector = ({ handelCountryChange }) => {
  const [countries, setCountries] = useState([])
 
  useEffect(() =>{
    const getCountries = async () =>{
      setCountries(await fetchCountries());
    }

    getCountries();
  }, [setCountries]);

  return(

    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handelCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country} >{country}</option> )}
      </NativeSelect>
    </FormControl>
  
  )

};

export default CountrySelector;



// import React, { useState, useEffect } from "react";
// import { NativeSelect, FormControl } from '@material-ui/core';
// import styles from './CountrySelector.module.css'
// import { fetchCountries } from "./CountryApi";

// export default function CountrySelector({ handelCountryChange }) {
//   const [countryData, setCountryData] = useState([]);    
   
//   useEffect(() => {      
//     async function fetchCountryName() {      
          
//       //working code.
//       // const apiResponse = await fetch('https://covid19.mathdro.id/api/countries');
//       // let dataFromAPI = await apiResponse.json();
//       // const { countries } = dataFromAPI;
//       // const countryList = countries.map((cntry) => cntry.name);
//       // setCountryData(countryList);
      
//       //code is not working because of the web api array issue 
//       // const apiResponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
//       // let dataFromAPI = await apiResponse.json();
//       // setCountryData(dataFromAPI);
//       // console.log(dataFromAPI);
//       // console.log(countryData);
           
//       // const data = await fetchCountries();            
//       // const { countries } = data;
//       // const countryList = countries.map((cntry) => cntry.name);
//       // setCountryData(countryList);

//       const getCountries = async () =>{
//         setCountryData(await fetchCountries());
//         console.log(countryData);
//       }      

//     }
    
//     fetchCountryName();
// },[setCountryData])

//   return  (
    
//     <FormControl className={styles.formControl}>
      
//       <NativeSelect defaultValue="" onChange={(e) => handelCountryChange(e.target.value)}             
//             >
//               {/* <option>Select Country</option>
//               {countryData.map((cntry, i) => (
//                 <option value={cntry} key={i}>
//                   {cntry}
//                 </option>
//               ))} */}
              
//               {/* {
//               Object.entries(countryData).map([code,{title}]) >= 
//                 <li key={code}> 
//                   <h2>{title}</h2>
//                 </li>
//               } */}

//               {/* {countryData[1].countryitems.map((item, index) => 
//                 <li key={index}>{item}</li>)
//               } */}

//               {/* {countryData.map((cntry, i) => (
//                 <option value={cntry} key={i}>
//                   {cntry}
//                 </option>
//               ))} */}

//              {/* {countryData.map((title, i) => (
//                 <option value={title} key={i}>
//                   {title}
//                 </option>
//               ))} */}

// {/* 
//             <option>Select Country</option>
//               {countryData.map((countries, i) => (
//                 <option value={countries} key={i}>
//                   {countries}
//                 </option>
//               ))} */}

//           {countryData.map((country, i) => <option key={i} value={country} >{country}</option> )}

//             </NativeSelect>
            
 
           

//     </FormControl>
     

//   )
// }
