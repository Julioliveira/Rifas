import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import View from "./components/swipeViews";
import Table from "./components/customerTable";
import Card from "./components/card";


export default class SimpleAppBar extends React.Component {
  state = {
    data: []
  }
  componentDidMount(){
    const requestBody = {
      query: `
          query { 
              rifas{email, name, rifa}
          }
              `
    };
    fetch("https://park-me-api.herokuapp.com/parkinglot", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json()).then(success=> {
        this.setState({data: success.data.rifas})
      }).catch(err => {
        console.log(err)
      })
  }
  render() {
    

    return (
      <div style={{flexGrow: 1}}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              RIFA
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid
          container
          justify="space-around"
          alignContent="center"
          alignItems="center"
          style={{marginTop: 5,
    marginBottom: 5}}
        >
          <Grid item>
            <View />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
          <Grid item xs={10}>
            <Table
              data={this.state.data}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
