import axios from "axios";

const url = "https://covid19.mathdro.id/api";
export const fatchData = async (selectedCountry) => {

    let changeableUrl = "https://covid19.mathdro.id/api";
    //let changeableUrl = "https://api.thevirustracker.com/free-api?global=stats";
  
   
    if (selectedCountry) {
      changeableUrl = `https://covid19.mathdro.id/api/countries/${selectedCountry}`;
      //changeableUrl = `https://api.thevirustracker.com/free-api?countryTotal=${selectedCountry}`;
          }
  
    // const response = await fetch(changeableUrl);
    // let data = await response.json();    
    // return data;


    
    const {data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };


    //console.log({  confirmed, recovered, deaths, lastUpdate });
    //return { confirmed, recovered, deaths, lastUpdate };


    // const {data: { confirmed, recovered, deaths, lastUpdate }} = await fetch(changeableUrl);
    // console.log({ confirmed, recovered, deaths, lastUpdate });
    // return { confirmed, recovered, deaths, lastUpdate };
  };


  // export const fetchCountries = async () => {
  //   try {      
  //     let CountryUrl = `${url}/countries`
  //     const response = await fetch(CountryUrl);
  //     let data = await response.json();
  //     return data;
  
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  
  export const fetchCountries = async () => {
    try {
  
      const {data :{ countries }} = await axios.get(`${url}/countries`);
  
      return(countries.map((country) => country.name))
  
    } catch (error) {
      console.log(error);
    }
  };

  export const getDailyData = async () => {
    try {
  
      const { data } = await axios.get(`${url}/daily`);
  
      const modifiedData = data.map((dailyData) => ({
  
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,      
      
      })
      );
  
      return modifiedData;
    } catch (err) {
      console.log(err);  
    }
  };

  
  