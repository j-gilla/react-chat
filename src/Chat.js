import React from 'react';
import io from 'socket.io-client'

class Chat extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            username: '',
            message: '',
            messages: []
        };
        this.socket = io('localhost:8080');

        this.sendMessage = ev =>{
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            });
            this.setState({message: ''});
        }
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
                            <button onClicK={this.sendMessage} className="btn btn-primary from-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;