import React from 'react' 

export class Form extends React.Component {
    render(){
        return <div>
            <div className="card">
                <div className="card-header text-center bg-info">
                    File Configuration
                </div>
                <div className="card-body bg-transparent">
                    <div className="container">
                        <div className="row">
                            <div className="col p-2 m-2">
                            Input Name :
                                <input type="text" className="form-control" name="input_name"
                                            onChange={(event) => this.props.onChange(event)} />
                            </div>
                            <div className="col p-2 m-2">
                            Output Name :
                                <input type="text" className="form-control" name="output_name"
                                            onChange={event => this.props.onChange(event)} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="form-group">
                            <label className="m-1" htmlFor="context">content:</label>
                            <div>
                                <textarea type="textbox" className="m-2 p-3"
                                    name="file_content" rows="5" cols="94" id="context"
                                    onChange={event => this.props.onChange(event)}></textarea>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.props.onSubmit} className="btn btn-primary"> 
                        Compress 
                    </button>
                </div>
            </div>
        </div>
    }
}