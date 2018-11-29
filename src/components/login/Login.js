import React, { Component } from "react";

class Login extends Component {
	constructor(props) {
		super(props);
		this.placeholder = {
			username: "username",
			password: "password",
			button: "submit"
		};
		this.state = {
			username: "",
			password: ""
		};
	}
	onUsernameChange = event => {
		let username = event.target.value;
		this.setState({ username });
	};
	onPasswordChange = event => {
		let password = event.target.value;
		this.setState({ password });
	};
	render() {
		return (
			<div className="container">
				<div className="login">
					<div className="login_card">
						<div className="login_card--logo">
							<img src={require("../../assets/images/small/coffee.jpg")} />
						</div>
						<div className="login_card--login">
							<form>
								<div className="input-group">
									<span className="input-group-label">U</span>
									<input
										className="input-group-field"
										type="text"
										placeholder={this.placeholder.username}
										onChange={this.onUsernameChange}
									/>
								</div>
								<div className="input-group">
									<span className="input-group-label">P</span>
									<input
										className="input-group-field"
										type="password"
										placeholder={this.placeholder.password}
										onChange={this.onPasswordChange}
									/>
								</div>

								<div className="input-group">
									<input
										type="submit"
										className="button rounded"
										value={this.placeholder.value}
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
