import React, {Component} from 'react';
import Button from '../Welcome/Button';

class BlogList extends Component{
	constructor (props) {
		const BlogId = props.id;
		super(props);
		let newHistory;
		try {
			newHistory = Array.from(JSON.parse(window.localStorage.getItem(BlogId)));
		} catch (err) {
			newHistory = [];
		}
		this.state = ({
			post: '',
			user: window.localStorage.getItem('user'),
			history: newHistory,
		});
	}

	handleFormChange = (event) => {
		this.setState({
			post: event.target.value,
		});
	}

	handleSubmit = (event) => {
		const currentUser = window.localStorage.getItem('user');
		const post = this.state.post;
		const history = this.state.history.slice();

		let PostData = new FormData();
		PostData.append('username', currentUser);
		PostData.append('post', post);
		fetch('https://localhost:8000/createpost/', {
		  method: 'POST',
		  body: PostData
		}).then(response => response.json())
		.then(response => console.log('Success:', JSON.stringify(response)))
		.catch(error => console.error('Error:', error));

		let newHistory = history.concat([{
				      	user: currentUser,
				      	post: post
				      }]);
		console.log(newHistory);
		this.setState({
			history: newHistory,
		});
		window.localStorage.setItem(this.props.id, JSON.stringify(newHistory));

		event.preventDefault();
	}

	render() {
		const history = this.state.history;
		const BlogHistory = history.map((item, key) => {
			return (
        <li key={key} >
            {item.post}
        </li>
      );
		});

		return (
			<form>
				<div >
					<ul >
						{BlogHistory}
					</ul>
					<input
					 //className="form-control"
					 name="new_post"
					 placeholder="Start typing..."
					 onChange={this.handleFormChange}
					/>
				</div>
				<Button
              action = {this.handleClick}
              type = {'primary'}
              title = {'Submit'}
              style={buttonStyle}
            />
			</form>
		);
	}
}
const buttonStyle = {
  margin : '10px 10px 10px 10px',
  border: '5px dotted pink',
  position: 'relative'
}
export default BlogList;