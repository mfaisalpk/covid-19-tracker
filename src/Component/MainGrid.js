import React, { useEffect, useState} from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './MainGrid.module.css';
import cx from 'classnames';
import Owncountup from './OwnCountUp';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fatchData } from "./CountryApi";

export default function MainGrid() {
  const [globalData, setGlobalData] = useState({});
  const [dataloading, setDataloading] = useState(false);
  
  useEffect(() => {      
      async function fetchGlobalData() {
        // setDataloading(true);
        // const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
        // console.log(apiResponse);
        // const dataFromAP I = await apiResponse.json();
        // console.log(dataFromAPI);
        // setGlobalData(dataFromAPI);
        // setDataloading(false);
        
        setDataloading(true);
        //const data = await fatchData('US');
        const data = await fatchData();
        setGlobalData(data);        
        console.log(data);        
        setDataloading(false);

      }
    fetchGlobalData();
  },[])

  const loading = "Loading..." ;
      
  if (dataloading) {
    return (
<div className={styles.container}>
      <Grid container spacing={3} justify= "center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
              <Typography color="textSecondary" gutterBottom>Infected</Typography>
                <Typography variant="h5">                                        
                    <CircularProgress style={{color: "rgba(0,0,255,0.5)"}}/>                    
                </Typography>
                <Typography color ="textSecondary" > {new Date().toDateString()}
                </Typography>
                <Typography variant ="body2">Number of active cases of Covid-19</Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} >
          <CardContent>
              <Typography color="textSecondary" gutterBottom>Recovered</Typography>
              <Typography variant="h5">                  
                  <CircularProgress style={{color: "rgba(0,255,0,0.5)"}}/>
              </Typography>
              <Typography color ="textSecondary" > {new Date().toDateString()}
              </Typography>
              <Typography variant ="body2">Number of recoveries from Covid-19</Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.deaths)} >
          <CardContent>
              <Typography color="textSecondary" gutterBottom>Deaths</Typography>
              <Typography variant="h5">                  
                <CircularProgress style={{color: "rgba(255,0,0.5)"}}/>
              </Typography>
              <Typography color ="textSecondary" > {new Date().toDateString()}
              </Typography>
              <Typography variant ="body2">Number of Deaths caused by Covid-19</Typography>
            </CardContent>
        </Grid>   
      </Grid>
    </div>

    )
    
  }
   
  return (
    <div className={styles.container}>
    
    <Grid container spacing={3} justify= "center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
              <Typography color="textSecondary" gutterBottom>Infected</Typography>
                <Typography variant="h5">                                                            
                    {/* <Owncountup end={globalData &&  globalData.countrydata && globalData.countrydata[0].confirmed}></Owncountup>  */}                    
                    <Owncountup end={globalData &&  globalData.confirmed && globalData.confirmed.value}></Owncountup>
                  </Typography>
                <Typography color ="textSecondary" > {new Date().toDateString()}
                </Typography>
                <Typography variant ="body2">Number of active cases of Covid-19</Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} >
          <CardContent>
              <Typography color="textSecondary" gutterBottom>Recovered</Typography>
              <Typography variant="h5">                                                    
                  <Owncountup end={globalData &&  globalData.recovered && globalData.recovered.value}></Owncountup>
              </Typography>
              <Typography color ="textSecondary" > {new Date().toDateString()}
              </Typography>
              <Typography variant ="body2">Number of recoveries from Covid-19</Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.deaths)} >
          <CardContent>
              <Typography color="textSecondary" gutterBottom>Deaths</Typography>
              <Typography variant="h5">
              <Owncountup end={globalData &&  globalData.deaths && globalData.deaths.value}></Owncountup>
              </Typography>
              <Typography color ="textSecondary" > {new Date().toDateString()}
              </Typography>
              <Typography variant ="body2">Number of Deaths caused by Covid-19</Typography>
            </CardContent>
      </Grid>
    </Grid>
    </div>
   
  );
}
