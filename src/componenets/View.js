import React from 'react'
import { HOC } from './HOC' 
import { Form } from "./Form";
import { SubmitedtShow } from './SubmitedShow'
import { sendRequest } from "./sendRequest";

export class View extends React.Component {
    constructor(props){
        super(props) ;

        this.url = "http://localhost:3600/api/name"
        this.state = {
            input_name : "" ,
            output_name : "" ,
            toggle : false ,
            input_size : "",
            output_size : "" ,
            err : ""
        }

    }

    onChange = (event) => this.setState({[event.target.name] : event.target.value}) 
    onSubmit = () => sendRequest("post" , this.url , this.state)
    .then(res => {
        console.log(res)
        this.setState({toggle : true})
    })
    .catch(err => console.log(err))

    render(){
        return  HOC(Form , SubmitedtShow , this.state.toggle , this.state ,
                        {onChange:this.onChange , onSubmit:this.onSubmit}) ;
    }




}