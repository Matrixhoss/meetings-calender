export const RECEIVE_MEETINGS = "RECEIVE_MEETINGS"
export const ADD_MEETING = "ADD_MEETING"

export function recevieMeetings(){
    return {
        type : RECEIVE_MEETINGS
    }
}  
export function addMeeting(meeting){
    return {
        type : ADD_MEETING,
        meeting
    }
}  