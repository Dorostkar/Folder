import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default (state = initialState.dashboard ,actions) =>{
    switch (actions.type){
        case types.LOAD_DASHBOARD_DEFAULT :
            return state;
        case types.CHANGE_DASHBOARD_CATEGORY :
            return {
                categories:[
                    ...state.categories.map(category =>{
                        if(category.title == actions.category){
                            category.active = true;
                        }else{
                            category.active =false;

                        }
                         return category;
                        })
                ]
            }

       
        default:
            return state;

    }
}