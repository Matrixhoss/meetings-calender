import {ADD_MEETING ,RECEIVE_MEETINGS} from '../actions/meetings'

export default function meetings(state ={} , action){
    switch(action.type){
        case RECEIVE_MEETINGS : return state
        case ADD_MEETING : 
        if (action.meeting.id in state){
            const m = state[action.meeting.id] 
            m.push(action.meeting)
            return {...state , [action.meeting.id] : m}
        }else{
            return {...state , [action.meeting.id] : [action.meeting]}
        }
        default : return state 
    }
}