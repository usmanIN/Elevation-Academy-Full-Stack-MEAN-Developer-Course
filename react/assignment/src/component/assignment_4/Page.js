import React, { Component } from 'react'
import ShowTable from './showTable';

import style from './assignment_2.module.css'


class Assignment_3 extends Component{
    constructor(){
        super();
        this.state = {
            name:'',
            department:'',
            rating:'',
            items: [],
            status:true
        }
    }    

    handleData = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }
    changeStatus = () =>{
        this.setState( {status:true});
    }

    submitData = (e) =>{
        e.preventDefault();
        let object = {
            name: this.state.name,
            department: this.state.department,
            rating:this.state.rating
        };
        
        if(!Object.values(object).every(x => x.length > 0)){
            alert("every Value Must Filled");
        }else{
            this.state.items.push(object);
            this.setState({ name:'',department:'',rating:'',status:false});            
        }  

    }
    render(){
        let  text;
        if(this.state.status){
            text =     <div>
                <h2>Employee Record</h2>
                        <form onSubmit={this.submitData} className={style.form}>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleData} placeholder='Name'/>
                            <input type="text" name="department" value={this.state.department}  onChange={this.handleData} placeholder='Department'/>
                            <input type="number" name="rating" value={this.state.rating}  onChange={this.handleData} placeholder='Rating'/>
                            <input type="submit"/>
                        </form>                            
                    </div>
        }else{
            text = <div>
                <h2>Employee Record Table</h2>
                {(this.state.items.length > 0)?<ShowTable data={this.state.items} />:null}
                <button onClick={this.changeStatus}>Go Back</button>
                </div>                                

        }


        return(
            <div className={`${style.area} ${style.page}`}>                
                {text}
            </div>
        )
    }
}

export default Assignment_3;