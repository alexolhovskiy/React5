export const UPDATE_NAME="UPDATE_NAME";

export const updateName=(name)=>({type:UPDATE_NAME,payload:name});

const initialState={
    name:"User",
};


export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case UPDATE_NAME:
            return {...state,name:action.payload};
        default:
            return state;
    }
};
