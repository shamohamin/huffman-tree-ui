import React from 'react'
import { HOC } from './HOC' 
import { Form } from "./Form";
import { SubmitedtShow } from './SubmitedShow'

export class View extends React.Component {
    constructor(props){
        super(props) ;

        this.state = {
            file_content : "" ,
            input_name : "" ,
            output_name : "" ,
            toggle : false ,
            input_size : "",
            output_size : "" ,
            err : ""
        }

    }

    onChange = (event) => this.setState({[event.target.name] : event.target.value}) 
    onSubmit = () => this.setState({toggle : true})

    render(){
        console.log(this.state)

        return  HOC(Form , SubmitedtShow , this.state.toggle , this.state ,
                        {onChange:this.onChange , onSubmit:this.onSubmit}) ;
    }




}