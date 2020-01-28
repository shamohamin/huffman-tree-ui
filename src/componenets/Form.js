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
                                <select name="input_name"  value={this.props.input_name} className="form-control"
                                    onClick={(event) => this.props.onChange(event)}>
                                        {
                                            this.props.input_name_arr.map(item => <option value={item} key={item}>
                                                {item}
                                            </option>)
                                        }
                                </select>

                                {/* <input type="text" className="form-control" name="input_name"
                                            onChange={(event) => this.props.onChange(event)} /> */}
                            </div>
                            <div className="col p-2 m-2">
                            Output Name :
                                <input type="text" className="form-control" name="output_name"
                                            onChange={event => this.props.onChange(event)} />
                            </div>
                        </div>
                    </div>
                    <button onClick={this.props.onSubmit} className="btn ml-3 btn-primary"> 
                        Compress 
                    </button>
                </div>
            </div>
        </div>
    }
}