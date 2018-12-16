import * as types from './actionTypes';

export const loadDashboard =()=>{
    return {type: types.LOAD_DASHBOARD_DEFAULT}
}

export const changeDashboardCategory = (category) =>{
    return {
        type: types.CHANGE_DASHBOARD_CATEGORY,
        category
    }
}