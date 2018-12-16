import React,{Component} from 'react';
import { connect } from "react-redux";

import * as dashboardActions from "../../actions/dashboardActions";
import { bindActionCreators } from 'redux';

//item

const Category = ({item,onItemClick}) => {
      return(  
      <li onClick={onItemClick} data-title={item.title} className={item.active ? "active": undefined}>
            <a href="#">{item.title}</a>
            <span className={item.action == 0 ? "hide" : undefined}>{item.action}</span>
        </li>
      )
        
    
      }; 

class CategorizedMenu extends Component{
    constructor(props){
        super(props);
    }
    onItemClick =(event)=>{
        event.preventDefault();
        this.props.actions.changeDashboardCategory(event.target.dataset.title ? event.target.dataset.title : event.target.text)
       }

    render(){
        const {categories} = this.props;
        return(
            <div className="categorizedMenu">
                <ul>
                    {categories.sort((a,b)=> a.order - b.order).map((item,key)=>
                    <Category item={item} key={key} onItemClick={this.onItemClick}/>
                    )}
              
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state,ownProps){
    return{
        categories:state.dashboard.categories
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(dashboardActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategorizedMenu);