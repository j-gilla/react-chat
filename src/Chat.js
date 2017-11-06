import React from 'react';

class extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            username: '',
            message: '',
            messages: []
        };
    }
    render(){
        return (
            <div className="cotainer">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Global Chat</div>
                                <hr />
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>
                        </div>
                        <div className="card-footer">
                            <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                            <br />
                            <input type="text" placeholder="Message" vlaue={this.state.username} onChange={ev => this.setState({message: ev.target.value})} className="form-control"/>
                            <br />
                            <button className="btn btn-primary from-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;