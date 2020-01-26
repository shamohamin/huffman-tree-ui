import React from 'react' 

export const SubmitedtShow = ({input_size , output_size , precent}) => {
    return <div>
        <div className="card">
            <div className="card-header text-center bg-info">
                Info 
            </div>
            <div className="card-body">
                <div className="float-left m-1">Input Size : </div>
                <div className="float-right">{input_size}</div>
                <hr className="p-4 m-1" />
                <div className="float-left m-1">Output Size : </div>
                <div className="float-right">{output_size}</div>
                <hr className="p-4 m-1" />
                <div className="float-left m-1">Precent : </div>
                <div className="float-right">{precent}</div>
            </div>
        </div>
    </div>
}