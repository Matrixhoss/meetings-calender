
import React ,{useEffect ,useState} from 'react'
import Calendar from 'react-calendar';
import {connect} from 'react-redux'
import {recevieMeetings } from '../actions/meetings'
import 'react-calendar/dist/Calendar.css';
import {getDateId ,formatAMPM} from '../utils/helper'
import NewMeeting from './NewMetting'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  automargin: {
    margin : '10px auto',
  },
  autowidth : {
    width: "100%",
    
  },
  green : {
      backgroundColor : '#70db70',
      
  },
  right : {
    display : 'flex',
    alignItems : "flex-end",
    position : 'absolute',
    bottom: "10px",
    right : '10px',
    height : "100%"
    
  },
  meetingspaper : {
        maxHeight: 100, 
        overflow: 'auto',
        marginTop: '5px',
        marginBottom: '5px',
    }
});

function MeetingCalender(props) {

  const [value, onChange] = useState(new Date());
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    props.dispatch(recevieMeetings())
  });

  return (
    <Box  border= {1} padding='10px' minHeight='500px' minWidth="500px" position='relative'>
          <Calendar
            onChange={onChange}
            value={value}
            className = {classes.autowidth}
            tileClassName = {({ activeStartDate, date, view }) => view === 'month' && getDateId(date) in props.meetings ? classes.green : null}
          />
          <NewMeeting open = {open} handleClose = {handleClose}/>

          <h3>Meetings</h3>
          {getDateId(value) in props.meetings ?
            <Paper  className={classes.meetingspaper}>
                <List dense={true}>
                {props.meetings[getDateId(value)].map((mt) => (
                    <ListItem>{mt.name} @ {formatAMPM(mt.date)}</ListItem>
                ))}
                </List> 
            </Paper> 
            : <p>No Meetings</p>
          
          }
          <div className={classes.right}>
            <Fab color="primary" aria-label="add" onClick={handleClickOpen} >
                    <AddIcon />
            </Fab>
          </div>
    </Box>
  );
}

function mapStateToProps({meetings}){
  return {
    meetings 
  }
}
export default connect(mapStateToProps)(MeetingCalender)
