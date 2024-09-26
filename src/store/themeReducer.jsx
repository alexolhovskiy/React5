export const CHANGE_THEME="CHANGE_THEME";

export const changeTheme=()=>({type:CHANGE_THEME});

const initialState={
    theme:"light"
};


export const themeReducer=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_THEME:
            return {...state,theme:state.theme=="light"?"dark":"light"};
        default:
            return state;
    }
};
