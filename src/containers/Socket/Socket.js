import { Component } from 'react';
import {connect} from 'react-redux';

const URL_ADDRESS = 'ws://localhost:8000';

class Socket extends Component {
    state = {
        socket: new WebSocket(URL_ADDRESS),
    };
    componentDidMount() {
        this.connectToSocket();
    };

    connectToSocket() {
        const Soc = this.state.socket;
        Soc.onopen = () => {
            console.log('Соединение закрыто');
        };
        Soc.onmessage = (message) => {
            const response = JSON.parse(message.data);
            switch (response.type) {
                case 'newBlog':
                    this.newBlogHandler(response.data);
                    break;
                default:
                    return;
            }
            console.log('message ->', );
        };

        Soc.onerror = (error) => {
            console.log('Ошибка', error.type);
        };
        Soc.onclose = () => {
            console.log('Соединение закрыто');
        };
    }

    newBlogHandler(blogs) {
        this.props.onNewMessage(blogs);
    }

    render() {
        if(this.props.newBlog) {
            const data = JSON.stringify(this.props.newBlog);
            this.state.socket.send(data);
        }

        return null;
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onNewMessage: (message) => dispatch({
            type: 'NewMessage',
            payload: message
        })
    }
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        newBlog: state.blogs.newBlog,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Socket);