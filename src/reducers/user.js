import * as types from '../actions/users/types';


const initialState = {
  user : []
}

const UserReducer= (state=initialState,action)=>{
 switch(action.types){
   case types.SET_USER :
   return {
     ...state,
     user :action. payload
   }
 }
 return state
}

export default UserReducer
