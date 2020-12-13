
import React  from 'react'
import {connect} from 'react-redux'
import MeetingCalender from './components/MeetingCalender'
import Grid from '@material-ui/core/Grid'
import './App.css';



function App(props) {

  return(
    <Grid container spacing={3}>
      <Grid xs></Grid>
      <Grid xs={10} >
        <h1>Calender</h1>
        <MeetingCalender />
      </Grid>
      <Grid xs></Grid>
     
    </Grid>
  )
}

function mapStateToProps({meetings}){
  return {
    meetings 
  }
}
export default connect(mapStateToProps)(App)
