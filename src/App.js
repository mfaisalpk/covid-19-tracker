import React, { Component } from "react";
import Header from "./Component/Header";
import Cards from './Component/Cards';
import Chart from './Component/Chart';
import CountrySelector from './Component/CountrySelector';
import { fatchData } from './Component/CountryApi';
import styles from './App.module.css'

class App extends Component {

  state = {
    data: {},
    country: "",
  }

  async componentDidMount(){
    const data = await fatchData();

    this.setState({
      data: data,
    })
  }

  handelCountryChange = async (country) => {
    
    const data = await fatchData(country);
    this.setState({ data: data, country: country});

  }
  render() {

    const {data, country } = this.state;

    return (
      <>
      <Header/>
        <div className={styles.container}>                        
          <Cards data={data} />
          <CountrySelector handelCountryChange={this.handelCountryChange}/>  
          <Chart data={ data } country={ country }/>
        </div>
      </>
    );
  }
}

export default App;
