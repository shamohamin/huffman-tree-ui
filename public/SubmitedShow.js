import React from 'react' 


export const SubmitedtShow = ({input_size , output_size , precent}) => {
    

    return <div style={{marginTop:'5%'}}>
        <div className="card m-4" style={inlineStyle}>
            <div className="card-header text-center bg-info">
                Info 
            </div>
            <div className="card-body">
                <div>
                    <div className="float-left m-1">Input Size : </div>
                    <div className="float-right">{input_size}</div>
                    <hr />
                </div>
                <div className="float-left m-1">Output Size : </div>
                <div className="float-right">{output_size}</div>
                <hr className="p-4 m-1"></hr>
                <div className="float-left m-1">Precent : </div>
                <div className="float-right">{precent}</div>
                <hr/>
            </div>
        </div>
    </div>
}