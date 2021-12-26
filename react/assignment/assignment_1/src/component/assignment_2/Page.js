import React, { Component } from 'react'
import ShowTable from './showTable';

import style from './assignment_2.module.css'


class Page extends Component{
    constructor(){
        super();
        this.state = {
            name:'',
            department:'',
            rating:'',
            items: []
        }
    }    

    handleData = (e) =>{
        this.setState({[e.target.name]:e.target.value});
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
            this.setState({ name:'',department:'',rating:''});
        }                        
    }

    // display = () =>{
    //     let text = '';
    //     if(this.state.items.length > 0){
    //         text+='<table>';
    //         this.state.items.map((item,index)=>{
    //             text+="<tr>";
    //             text+="<td>"+item.name +"</td>";                
    //             text+="<td>"+item.department +"</td>";                
    //             text+="<td>"+item.rating +"</td>";                
    //             text+="</tr>";                
    //         });
    //         text+='</table>';
    //     }
    //     return text;
    // }

    render(){
        return(
            <div className={`${style.area} ${style.page}`}>
                <div>
                    <form onSubmit={this.submitData} className={style.form}>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleData} placeholder='Name'/>
                        <input type="text" name="department" value={this.state.department}  onChange={this.handleData} placeholder='Department'/>
                        <input type="text" name="rating" value={this.state.rating}  onChange={this.handleData} placeholder='Rating'/>
                        <input type="submit"/>
                    </form>                            
                </div>
                <div>
                    <h2>Employee Record</h2>
                    {(this.state.items.length > 0)?<ShowTable data={this.state.items} />:null}
                </div>                                
            </div>
        )
    }
}

export default Page;