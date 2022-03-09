
import React from "react";
import axios from "axios";
import {Card, CardContent, Container ,Box, Select, MenuItem, InputLabel, FormControl, Grid, CardMedia} from "@mui/material";

export default class Corona extends React.Component{
    
    state = {   data:"",   countries:"", country:"", listCountries:"" }
    
    handleUpdate =  (e) => {                
        
        if(e.target.value!==""){
            const name = e.target.value.toLowerCase();             
            
            axios.get("https://disease.sh/v3/covid-19/countries/"+name)
            .then(response => this.setState({country:response.data}))
            .catch((error)=>{console.log(error)});
                
        }        
    }
    
    //https://disease.sh/v3/covid-19/countries

    async componentDidMount(){
        const response = await axios.get("https://disease.sh/v3/covid-19/all");
        const country = await axios.get("https://disease.sh/v3/covid-19/countries/india");
        let countries = await axios.get("https://disease.sh/v3/covid-19/countries");

        this.setState({
            data: response.data,
            country: country.data,
            listCountries:countries.data,
            countries: countries.data.map((item) => ({name:item.country, code:item.countryInfo.iso3}) )            
        });        
    }
    

    render(){
        const data = {
            update: this.state.data.updated,
            total: this.state.data.cases,
            deaths: this.state.data.deaths,
            active: this.state.data.active,
            recovered: this.state.data.recovered,
            population: this.state.data.population,
            todayCases: this.state.data.todayCases,
            todayDeaths: this.state.data.todayDeaths,
            todayRecovered: this.state.data.todayRecovered
        }      
        let date = "";
        if(data.update){
            date = new Date();
            date.setTime(data.update);            
        }
        
        
        return(
            <div>
                <h1>Corona Disease Data API</h1>
                <Container sx={{maxWidth:"xl"}}>
                    <p>{(date==="")?"":"Updated: "+date.toString()}</p>
                    <Box sx={{ display:"flex", justifyContent: 'flex-start'}}>
                        <Card sx={{ margin: 2, width:"100%"}}>
                            <CardContent>
                                <h1>Total</h1>
                                <p>{data.total}</p>
                            </CardContent>
                        </Card>
                        <Card sx={{ margin: 2, width:"100%"}}>
                            <CardContent>
                                <h1>Deaths</h1>
                                <p>{data.deaths}</p>
                            </CardContent>
                        </Card>
                        <Card sx={{ margin: 2, width:"100%"}}>
                            <CardContent>
                                <h1>Today Cases</h1>
                                <p>{data.todayCases}</p>
                            </CardContent>
                        </Card>
                        <Card sx={{ margin: 2, width:"100%"}}>
                            <CardContent>
                                <h1>Today Deaths</h1>
                                <p>{data.todayDeaths}</p>
                            </CardContent>
                        </Card>
                    </Box>
                
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Box sx= {{ display:"flex", flexWrap: 'wrap'}}>
                    {
                        this.state.listCountries && this.state.listCountries.map((item,index) => {
                            return (
                                <Detail key={index} data={item} />
                            )
                        })
                    }
                    </Box>                    
                </Grid>
                <Grid item xs={3}>            
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Countries</InputLabel>
                        <Select labelId="demo-simple-select-label" name="selectCountry" value="" onChange={this.handleUpdate} >        
                            {
                                this.state.countries && this.state.countries.map((item,index) => {
                                    return (                            
                                        <MenuItem value={item.code} key={index}>{item.name}</MenuItem>
                                    )
                                })
                            }    
                        </Select>                   
                    </FormControl>
                    
                    {
                        this.state.country && (                                                    
                            <Card>
                                <CardContent>
                                    <img src={this.state.country.countryInfo.flag}  alt={this.state.country.country}/>
                                    <p>Country: {this.state.country.country}</p>
                                    <p>Cases: {this.state.country.cases}</p>
                                    <p>Deaths: {this.state.country.deaths}</p>
                                    <p>Population: {this.state.country.population}</p>
                                </CardContent>
                            </Card>
                        )
                    }
        
                </Grid>
            </Grid>
        </Container>    

                
            </div>
        )
    }
}

const Detail = (props) =>{
    return (
        
            <Card sx={{display:'flex',margin: 2 , textAlign: 'left'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>               
                    <p>Country: {props.data.country}</p>
                    <p>Cases: {props.data.cases}</p>
                    <p>Deaths: {props.data.deaths}</p>
                    <p>Population: {props.data.population}</p>
                </CardContent>
                <CardMedia
                    component="img"                    
                    image={props.data.countryInfo.flag}
                    alt={props.data.country}
                />
                
            </Card>
        
    )
}