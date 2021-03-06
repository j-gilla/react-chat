import React from 'react';
import io from 'socket.io-client';

class Chat extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            username: '',
            message: '',
            messages: []
        };
        this.socket = io('localhost:8080');

        this.socket.on('RECIEVE_MESSAGE', function (data) {
            addMessage(data);
        });

        this.sendMessage = ev =>{
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            });
            this.setState({message: ''});
        }
      
        const addMessage = data => {
            console.log(data);
            this.setState({message: [...this.state.messages, data]});
            console.log(this.state.messages);
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
                            <button onClick={this.sendMessage} className="btn btn-primary from-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;