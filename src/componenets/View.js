import React from 'react'
import { HOC } from './HOC' 
import { Form } from "./Form";
import { SubmitedtShow } from './SubmitedShow'
import { sendRequest } from "./sendRequest";

export class View extends React.Component {
    constructor(props){
        super(props) ;

        this.url = "http://localhost:3600/api/name" ;
        this.getUrl = "http://localhost:3600/api/ls" ;
        this.state = {
            input_name_arr : [] ,
            input_name : "" ,
            output_name : "" ,
            toggle : false ,
            input_size : "",
            output_size : "" ,
            err : "" ,
            precent : "",
            loading : true

        }

    }
    componentDidMount(){
        sendRequest("get" , this.getUrl)
        .then(res => {

            this.setState({input_name_arr : res.data , loading : false})
        })
        .catch(err => console.log(err))
    }

    onChange = (event) => this.setState({[event.target.name] : event.target.value}) 
    onSubmit = () => sendRequest("post" , this.url , this.state)
    .then(res => {
        let splited = res.data.split(' ') ;
        this.setState({toggle : true , input_size : splited[0] , output_size : splited[1] , precent : splited[2]})
    })
    .catch(err => console.log(err))

    render(){
        console.log(this.state)
        return !this.state.loading ? HOC(Form , SubmitedtShow , this.state.toggle , this.state ,
                        {onChange:this.onChange , onSubmit:this.onSubmit}) : "loading" ;
    }




}