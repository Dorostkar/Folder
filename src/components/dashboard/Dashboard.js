import React,{Component} from 'react';
import CategorizedMenu from '../common/CategorizedMenu'

class Dashboard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        // const list=[
        //     {title:"Home",action:3,order:10},
        //     {title:"Tax",action:3,order:2},
        //     {title:"work",action:3,order:3},
        //     {title:"Pay Slip",action:3,order:4},
        //     {title:"bank",action:3,order:5},
        //     {title:"Recipt",action:3,order:6},
        //     {title:"Car",action:3,order:7}
        //     ]
        return(
            <div>
                <CategorizedMenu/>
            </div>
        )
    }
}

export default Dashboard;