import 'date-fns';
import React from 'react';
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {createNewMeeting} from '../utils/helper'
import {addMeeting} from '../actions/meetings'


 function NewMetting(props) {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [nameValue , setNameValue] = React.useState("")
    const [errorValue , setErrorValue] = React.useState(false)


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddMeeting = () => {

        if (nameValue === ""){
          setErrorValue(true)
        }
        else {
        props.dispatch(addMeeting(createNewMeeting(nameValue , selectedDate)))
        setNameValue("")
        props.handleClose()

        setErrorValue(false)
        }
  }

  return (
    
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Metting</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            error = {errorValue}
            margin="normal"
            id="name"
            label="Name"
            type="text"
            variant='outlined'
            value = {nameValue}
            onChange = {(e) => setNameValue(e.target.value)}
            helperText={errorValue ? "Incorrect entry." : ""}
            fullWidth
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                margin="normal"
                id="date picker"
                label="Date picker"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
                <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
                />

                
            </Grid>
         </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddMeeting} color="primary">
            Add Meeting
          </Button>
        </DialogActions>
      </Dialog>
    </div>
   
  );
}

export default connect()(NewMetting)